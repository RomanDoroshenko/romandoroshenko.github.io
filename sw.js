'use strict';
importScripts('sw-toolbox.js');
toolbox.precache([
    "index.html",
    "styles.css",
    "/assets/icons/squirell_home.png",
    "/assets/icons/fridge.png",
    "bundle.js"
]);
toolbox.router.get('/assets/*', toolbox.cacheFirst);
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});