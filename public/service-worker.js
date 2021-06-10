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

self.addEventListener('activate', function (e) {  
    e.waitUntil(
        caches.keys().then(function (keyList) {  
            let cacheKeepList = keyList.filter(function (key) {  
                return ket.indexOP(APP_PREFIX)
            })
            cacheKeepList.push(CACHE_NAME)
            return Promise.all(
                keyList.map(function (key, i) {  
                    if (cacheKeyList.indexOf(key) === -1) {
                        console.log('Deleting cache:' + ketList[i])
                        return caches.delete(keyList[i])
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', function (e) {  
    console.log('Fetch request from app: '+ e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request) {  
            if (request) {
                console.log('Responding to app fetch request with cached data: '+ e.request.url)
                return request
            } else {
                console.log('No cache available, fetching from network: ' + e.request.url)
                return fetch(e.request)
            }
        })
    )
})