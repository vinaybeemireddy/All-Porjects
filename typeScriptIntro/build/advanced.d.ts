type rgb = [number, number, number, string];
declare let color: rgb;
type union = number | string | boolean;
declare let numStr: union;
type user = [string, number, number];
declare let user1: user;
declare function getInfo<type>(value: type): type;
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
declare let obj: Admin;
declare class Car {
    brand: string;
    model: string;
    constructor(b: string, m: string);
}
declare let c: Car;
