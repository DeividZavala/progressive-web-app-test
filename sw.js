"use strict";

var carDealsCacheName = [
    "/js/app.js",
    "/js/carService.js",
    "/js/carStorage.js",
    "/js/swRegister.js",
    "/js/template.js",
    "/node_modules/es6-promise-polyfill/promise.min.js",
    "/node_modules/systemjs/dist/system.js",
    "/node_modules/whatwg-fetch/fetch.js",
    "localforage/localforage.min.js",
    "localforage/localforage-getitems.js",
    "localforage/localforage-setitems.js"
]

self.addEventListener("install", function (event) {
    console.log("Form SW: Install event", event)
    event.waitUntil(
        caches.open(carDealsCacheName)
        .then(function (cache) {
            return cache.addAll(carDealsCacheName)
        })
    );
});

self.addEventListener("activate", function (event) {

    console.log("Form SW: Activate State", event)
})