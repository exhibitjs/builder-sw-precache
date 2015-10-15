# sw-precache

> **[Exhibit.js](https://github.com/exhibitjs/exhibit) builder**
>
> Generates a service worker script using the Google Chrome team’s [sw-precache](https://github.com/GoogleChrome/sw-precache) template.
> 
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]


## Usage

```js
  .use('sw-precache', {cacheId: 'foo'})
```

Generates a service worker script and adds it to your app. The generated script includes filenames and hashes of cacheable files in your app.


## Options

> All options are technically optional, but it is usually a good idea to set, at minimum, a unique `cacheId`.

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

Chooses which files should be included in the service worker cache. Follows Exhibit's [matching convention](https://github.com/exhibitjs/exhibit/docs/matching.md).

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
