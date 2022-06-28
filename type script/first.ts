// let a: string = "hello world";
// console.log(a);

// let a: any[] = ["kano", "king", "abhu", "rudra"];
// console.log(a);
// a.push(1);
// a.push(true);
// console.log(a);

// interface empDetails {
//   id: number;
//   name: any;
//   class: string;
//   address: string;
// }
// let employee: empDetails = {
//   id: 1,
//   name: "kano",
//   class: "mca",
//   address: "dumas",
// };
// employee.name = "king";
// console.log(employee);

// let a: string | number = "rohit";
// a = 10;
// console.log(a);

// function msg(a: string, b?: any): string {
//   return b ? a + b : a;
// }
// console.log(msg("Hello", 10));

// class exam {
//   name = "king";
//   constructor(){
//   }
//   getName() {
//     console.log(this.name);
//   }
// }
// let a = new exam();
// a.getName();
// console.log("using property  : ", a.name);

// namespace UsersUtils {
//   export class Users {
//     getName() {
//       return "king";
//     }
//   }
// }
// let a = new UsersUtils.Users();
// console.log(a.getName());

// import sLogIn from "./student";
// import tLogIn from "./teacher";
// let s = new sLogIn();
// console.log(s.data);
// let t = new tLogIn();
// console.log(t.data);

// function users<T>(data: T): T {
//   return data;
// }
// console.log(users({ name: "king", class: 10 }).name);

// enum Days {
//   mon = "work",
//   tue,
//   web,
//   thu,
//   fri,
//   sat,
//   sun,
// }
// let whichDay: Days;
// whichDay = Days.mon;
// console.log(whichDay);

// let s = Symbol("k");
// let x = Symbol("k");
// console.log(s.toString());
// console.log(x);
// console.log(s === x);
// let data = {
//   [s]: "content",
// };
// console.log(data[s]);

// let t: [number, string, boolean];
// t = [10, "kano", true];
// console.log(t);
// t.push("king");
// console.log(t);

let a: string | number = 1;
let b: "abc" | 1 = "abc";
console.log(b);
