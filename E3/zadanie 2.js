function isPrime(number) {
    if (number > 1000) {
        console.log("Данные неверны, число больше 1000.");
        return;
    }
    if (number === 0 || number === 1) {
        console.log("Число не является простым.");
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Число не является простым.");
            return;
        }
    }
    console.log("Число является простым.");
}

// Пример использования функции
isPrime(23);
isPrime(997);
isPrime(1001);
isPrime(1);
isPrime(0);
