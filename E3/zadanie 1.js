let myMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

let keys = myMap.keys();

for (let key of keys) {
    let value = myMap.get(key);
    console.log(`Ключ — ${key}, значение — ${value}`);
}
