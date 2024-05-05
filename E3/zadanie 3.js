function createAdder(x) {
    return function(y) {
        return x + y;
    };
}
// Пример использования функции
let addFive = createAdder(5);
console.log(addFive(10));
console.log(addFive(20));
