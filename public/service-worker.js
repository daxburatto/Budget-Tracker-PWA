const FILES_TO_CACHE = [
    "./index.html",
    "./css/styles.css",
    "./js/idb.js",
    "./js.index.js"
]

const APP_PREFIX = 'BudgetTracker'
const VERSION = '.v00.build00'
const CACHE_NAME = APP_PREFIX + VERSION

self.addEventListener('install', function (e) {  
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {  
            console.log("Installing cache:" + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})