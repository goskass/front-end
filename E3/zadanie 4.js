function printNumbers(start, end) {
    let current = start;

    let intervalId = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}
printNumbers(5, 15);