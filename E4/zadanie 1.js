function displayOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': ' + obj[key]);
        }
    }
}
const exampleObj = {
    name: 'gogi',
    age: 18,
    job: 'Deliver'
};

displayOwnProperties(exampleObj);

