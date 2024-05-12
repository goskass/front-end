function checkPropertyExistence(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}
const exampleObj = {
    name: 'Piter',
    age: 19,
    job: 'Deliver'
};
console.log(checkPropertyExistence('name', exampleObj)); // true
console.log(checkPropertyExistence('salary', exampleObj)); // false
