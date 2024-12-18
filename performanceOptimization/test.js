//1 1 2 3 5 8 13

// let memo={
//     1:1,
//     2:1,
//     3:2,
//     4:3,
//     5: 5
// }

const memoise = (fun) => {
  const data = {};
  return (input) => {
    return data[input] || (data[input] = fun(input));
  };
};
const fib = memoise((n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
});

console.time("T1");
console.log(fib(40));
console.timeEnd("T1");

function Component1(fun) {
  fun();
}

function Component2(fun) {
  fun();
}
Component1(fib);
Component2(fib);
