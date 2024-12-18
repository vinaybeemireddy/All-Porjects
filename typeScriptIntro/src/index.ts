//Data types.

//number
let n: number = 10;
// n="a";
n = 20;

//string
let s: string = "ABC";
// s=123;
s = "DEF";

//boolean
let b: boolean = false;
b = true;
// b=124;

//array

let array: number[] = [1, 2, 3, 4, 5];

let arrString: string[] = ["1", "c", "b"];

//object
export type userObj = {
  name: string;
  id: string;
  score: number;
  married: boolean;
  address: string;
};

let user: userObj = {
  name: "goku",
  id: "1",
  score: 9,
  married: false,
  address: "DBZ",
};

//array of object.
let dataBase: Array<userObj> = [
  {
    name: "goku",
    id: "1",
    score: 9,
    married: false,
    address: "DBZ",
  },
  {
    name: "goku",
    id: "1",
    score: 9,
    married: false,
    address: "DBZ",
  },
];

//object of array

type newObj = { images: string[] };
let imageDB: newObj = {
  images: ["image1", "image2"],
};

//union and intersection
let numStr: number | string | boolean = 123;

numStr = false;

numStr = "124";

//user       name, id, address
//admin      name, id, address role
//superAdmin name, id, address role

type user = { name: string; id: string; address: string };
type admin = { role: string };

const goku: user & admin = {
  name: "goku",
  id: "1",
  address: "DBZ",
  role: "admin",
};
