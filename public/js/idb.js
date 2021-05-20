const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

const dbName = "budgetdb"
const dbVersion = 1
const request = indexedDB.open(dbName, dbVersion)
let db 

request.onupgradeneeded = function(event) {
    console.log('IDB DB Created')
    const db = event.target.result
    db.createObjectStore('new_transaction', { autoIncrement: true })
}

request.onsuccess = function (event) {
    console.log('IDB DB Exists')
    db = event.target.result
    if (navigator.onLine) {
        uploadTransaction()
    }
}

request.onerror = function (event) {
    console.log("Error:"+event.target.errorCode)
}

function uploadTransaction() {  
    const transaction = db.transaction(['new_transaction'], 'readwrite')
    const transactionObjectStore = transaction.objectStore('new_transaction')
    const getAll = transactionObjectStore.getAll()
    getAll.onsuccess = function () {  
        
    }