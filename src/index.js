import externalFunctions from 'sw-precache/lib/functions';
import {createHash} from 'crypto';
import {readFileSync} from 'fs';
import {join} from 'path';

const templateString = readFileSync(join(
  require.resolve('sw-precache'), '..', '..', 'service-worker.tmpl'
), 'utf8');

const emptyBuffer = new Buffer('');

// sw-precache uses this version string in case there are breaking changes to
// the cache format it uses
const VERSION = 'v1';

const defaults = {
  filename: 'service-worker.js',
  include: '**/*.{js,html,css,png,jpg,gif,svg}',
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  let template;
  let files = [];

  // return a sequence of builders
  // (this is a hack until 'batch builders' are implemented)
  return [
    function exhibitSWPrecache1({relativePath, matches, contents}) {
      // add any matching files to an array
      if (matches(options.include) && relativePath !== options.filename) {
        if (files.indexOf(relativePath) === -1) files.push(relativePath);

        // and output the service worker
        return {
          [relativePath]: contents,
          [options.filename]: emptyBuffer,
        };
      }

      return contents;
    },

    function exhibitSWPrecache2(job) {
      const {
        importInternalFile, contents,
        relativePath, util: {_},
      } = job;

      if (relativePath !== options.filename) return contents;

      // once only: compile the template to a function
      if (!template) template = _.template(templateString);

      // get the contents of all files based on the array collected on the
      // preceding step (during this and previous batches)
      const fileContents = {};
      for (let i = 0, l = files.length; i < l; i++) {
        const file = files[i];
        try {
          fileContents[file] = importInternalFile(file).contents;
        }
        catch (error) {
          // file might not exist any more; that's ok
          if (error.code !== 'ENOENT') throw error;
        }
      }

      // overwrite the files array with the new version that is known to
      // be all existing on this batch
      files = Object.keys(fileContents);

      // make the cache config (with the same strict sorted approach that
      // sw-precache uses)
      const precacheConfig = JSON.stringify(files.sort().map(file => {
        return [file, getHash(fileContents[file])];
      }));

      return template(Object.assign({}, options, {
        precacheConfig,
        cacheId: options.cacheId,
        directoryIndex: options.directoryIndex || '',
        externalFunctions,
        handleFetch: options.handleFetch,
        ignoreUrlParametersMatching: options.ignoreUrlParametersMatching,
        importScripts: options.importScripts ? options.importScripts.map(JSON.stringify).join(',') : null,
        navigateFallback: options.navigateFallback || '',
        version: VERSION,
      }));
    },
  ];
}

function getHash(data) {
  const md5 = createHash('md5');
  md5.update(data);
  return md5.digest('hex');
}
