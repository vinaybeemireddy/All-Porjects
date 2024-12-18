let obj = {
  counter: 1,
}; //address

let obj2 = { ...obj };

obj2.counter = 2;

console.log(obj2 === obj);
