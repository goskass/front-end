function createEmptyObjectWithoutPrototype() {
  const emptyObject = Object.create(null);
  return emptyObject;
}

const emptyObj = createEmptyObjectWithoutPrototype();
console.log(emptyObj); // {}
console.log(Object.getPrototypeOf(emptyObj));
