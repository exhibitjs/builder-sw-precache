# sw-precache

> **Exhibit.js builder plugin**
>
> Generates a service worker using the Chrome team’s [sw-precache](https://github.com/GoogleChrome/sw-precache) template.
> 
> ```sh
> $ npm install -D exhibit-builder-sw-precache
> ```
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]


## Usage

```js
  .use('sw-precache', {cacheId: 'foo'})
```

This creates `service-worker.js` and adds it to your app. The generated script includes filenames and hashes of any cacheable files found in your app.


## Options

> All options are technically optional, but it's a good idea to set a unique `cacheId` at minimum.

#### sw-precache options

The following [sw-precache options](https://github.com/GoogleChrome/sw-precache#options) can be set directly:

- [`cacheId`](https://github.com/GoogleChrome/sw-precache#cacheid-string)
- [`directoryIndex`](https://github.com/GoogleChrome/sw-precache#directoryindex-string)
- [`handleFetch`](https://github.com/GoogleChrome/sw-precache#handlefetch-boolean)
- [`ignoreUrlParametersMatching`](https://github.com/GoogleChrome/sw-precache#ignoreurlparametersmatching-arrayregex)
- [`importScripts`](https://github.com/GoogleChrome/sw-precache#importscripts-arraystring)
- ~~[`maximumFileSizeToCacheInBytes`](https://github.com/GoogleChrome/sw-precache#maximumfilesizetocacheinbytes-number)~~ *not yet working*
- [`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)


#### Additional options

> **`include`** — default: `'**/*.{js,html,css,png,jpg,gif,svg}'`

Chooses which files should be included in the service worker cache. Follows Exhibit's [glob convention](https://github.com/exhibitjs/exhibit/docs/glob.md).

> **`filename`** — default: `'service-worker.js'`

The path for the generated service worker.


## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-sw-precache
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-sw-precache.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-sw-precache
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-sw-precache.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-sw-precache
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-sw-precache.svg?style=flat-square
