> # sw-precache
>
> **Exhibit.js builder plugin**
>
> Generates a service worker using the Chrome team’s [sw-precache](https://github.com/GoogleChrome/sw-precache) template.
>
> ```sh
> $ npm install -D exhibit-builder-sw-precache
> ```
>
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

```js
  .use('sw-precache', {cacheId: 'foo'})
```

This looks for cacheable files in your app, and then generates a `service-worker.js` that will cache those files.

This plugin should go at the end of your build sequence, after all cacheable assets’ contents have been finalized – i.e. after any preprocessors, minifiers, compressers, etc.


## Options

> **`include`** (string/array/function) — default: `'**/*.{js,html,css,png,jpg,gif,svg}'`

Chooses which files should be included in the service worker cache. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/blob/master/docs/glob-convention.md).

> **`filename`** (string) — default: `'service-worker.js'`

The path for the generated service worker.

#### Additional options

If set, the following options are used to configure the sw-precache template:

- [`cacheId`](https://github.com/GoogleChrome/sw-precache#cacheid-string)
- [`directoryIndex`](https://github.com/GoogleChrome/sw-precache#directoryindex-string)
- [`handleFetch`](https://github.com/GoogleChrome/sw-precache#handlefetch-boolean)
- [`ignoreUrlParametersMatching`](https://github.com/GoogleChrome/sw-precache#ignoreurlparametersmatching-arrayregex)
- [`importScripts`](https://github.com/GoogleChrome/sw-precache#importscripts-arraystring)
- ~~[`maximumFileSizeToCacheInBytes`](https://github.com/GoogleChrome/sw-precache#maximumfilesizetocacheinbytes-number)~~ *not yet working*
- [`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)


---

## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-autoprefixer
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-autoprefixer.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-autoprefixer
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-autoprefixer.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-autoprefixer
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-autoprefixer.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-autoprefixer#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-autoprefixer.svg?style=flat-square&label=devDeps

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-autoprefixer#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-autoprefixer.svg?style=flat-square&label=peerDeps
