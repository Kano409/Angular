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
var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "king";
        };
        return Users;
    }());
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var a = new UsersUtils.Users();
console.log(a.getName());
