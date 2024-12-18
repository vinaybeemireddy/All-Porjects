//Enums (read it try it)

//tuple

type rgb = [number, number, number, string];

let color: rgb = [123, 456, 789, "abc"];

type union = number | string | boolean;

let numStr: union = 10;

type user = [string, number, number];

let user1: user = ["ajay", 12, 9];

//generic functions

function getInfo<type>(value: type) {
  return value;
}

getInfo<number>(123);
getInfo<string>("12454");

// interface

interface user2 {
  id: number;
  name: string;
  role: string;
}

interface Admin extends user2 {
  access: boolean;
  employee?: boolean;
  phone1: number;
  phone2?: number;
}

let obj: Admin = {
  id: 1,
  name: "vegita",
  role: "AI",
  access: true,
  phone1: 123,
};

class Car {
  brand: string;
  model: string;
  constructor(b: string, m: string) {
    this.brand = b;
    this.model = m;
  }
}

let c = new Car("Mahindra", "Thar");
