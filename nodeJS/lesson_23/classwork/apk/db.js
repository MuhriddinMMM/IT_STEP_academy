// class Database {
//   constructor() {
//     this._connect();
//   }

//   _connect() {
//     mongoose
//       .connect(`mongodb://${server}/${database}`)
//       .then(() => {
//         console.log("Database connection successful");
//       })
//       .catch((err) => {
//         console.error("Database connection error");
//       });
//   }
// }

// module.exports = new Database();

let promise = new Promise((resolve, reject) => {
   reject("o noooooooooooo");
    resolve("YES uraa");
 
});

console.log(
  promise.then(
    (money) => {
      console.log(money);
    },
    (moMoney) => {
      console.log(moMoney);
    }
  )
);

// promise
//   .then((money) => {
//     console.log(money);
//   })
//   .catch((noMoney) => {
//     console.log(noMoney);
//   });

// class Identification {
//   constructor(status) {
//     this.status = status;
//   }
//   checkStatus() {
//     return new Promise((resolve, reject) => {
//       if (this.status == "admin") resolve("Admin");
//       else reject("user");
//     });
//   }
// }

// let newUser = new Identification("admin");
// newUser
//   .checkStatus()
//   .then((newUser) => {
//     console.log(newUser);
//   })
//   .catch((newUser) => {
//     console.log(newUser);
//   });

// class Person {
//   constructor(name, classOf, sex, isStudent) {
//     this.name = name;
//     this.classOf = classOf;
//     this.sex = sex;
//     this.isStudent = isStudent;
//   }
//   identifySex() {
//     if (this.sex == "male") return "m";
//     else return "f";
//   }

//   identifyJob() {
//     if (this.isStudent) return "student";
//     else {
//       delete this.classOf;
//       return "professor";
//     }
//   }

//   identifyClass() {
//     if (this.isStudent) return 4 - (this.classOf - new Date().getFullYear());
//     else return null;
//   }
//   sort() {
//     let sex = this.identifySex();
//     let job = this.identifyJob();
//     let year = this.identifyClass();
//   return  new Promise((resolve, reject) => {
//       if (sex === "f" && job === "student" && year == 1)
//         return resolve("1st year student Dorm for girls");
//       if (sex === "f" && job === "student" && year == 2)
//         return resolve("2nd year student Dorm for girls");
//       if (sex === "f" && job === "student" && year == 3)
//         return resolve("3rd year student Dorm for girls");
//       if (sex === "f" && job === "student" && year == 4)
//         return resolve("4th year student Dorm for girls");

//       if (sex === "m" && job === "student" && year == 1)
//         return resolve("1st year student Dorm for boys");
//       if (sex === "m" && job === "student" && year == 2)
//         return resolve("2nd year student Dorm for boys");
//       if (sex === "m" && job === "student" && year == 3)
//         return resolve("3rd year student Dorm for boys");
//       if (sex === "m" && job === "student" && year == 4)
//         return resolve("4th year student Dorm for boys");

//       if (sex === "f" && job === "professor") return reject("professor");
//       if (sex === "m" && job === "professor") return reject("professor");
//       if (year > 4 || year < 1) return reject("UYGA BOR");
//     });
//   }
// }

// let a = new Person("Muxrish1", 2022, "male", true);
// let b = new Person("Muxrish2", 2021, "male", true);
// let c = new Person("Muxrish3", 2023, "male", true);
// let d = new Person("Muxrish4", 2024, "male", true);
// let e = new Person("Muxrish5", 2023, "male", true);
// let f = new Person("Muxrish6", 2017, "male", true);
// let g = new Person("Muxrish7", 2016, "male", true);
// let h = new Person("Muxrish8", 2015, "male", true);
// let i = new Person("Muxrish9", 2023, "male", false);

// let array = [a, b, c, d, e, f, g, h, i];

// for (let i = 0; i < array.length; i++) {
//   console.log(
//     array[i]
//       .sort()
//       .then((ident) => {
//         console.log(ident);
//       })
//       .catch((ident) => {
//         console.log(ident);
//       })
//   );
// }
// console.log(
//   a
//     .sort()
//     .then((ident) => {
//       console.log(ident);
//     })
//     .catch((ident) => {
//       console.log(ident);
//     })
// );

// let newUser = new Identification("admin");
// newUser
//   .checkStatus()
//   .then((newUser) => {
//     console.log(newUser);
//   })
//   .catch((newUser) => {
//     console.log(newUser);
//   });
