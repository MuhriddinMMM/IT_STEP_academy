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

// let promise = new Promise((resolve, reject) => {
//   // resolve('1000000 сумов')
//   reject("0 сумов");
// });

// 1 cпособ:

// promise.then((money) => {
//     console.log(money)
// }, (noMoney) => {
//     console.log(noMoney)
// })

// 2 способ:

// promise
//   .then((money) => {
//     console.log(money);
//   })
//   .catch((noMoney) => {
//     console.log(noMoney);
//   });


class Person {
    constructor(name, classOf, sex, isStudent) {
        this.name = name
        this.classOf = classOf
        this.sex = sex
        this.isStudent = isStudent
    }

    identifySex(){
        if(this.sex == 'male') return 'm'
        else return "f"
    }

    identifyJob(){
        if(this.isStudent) return 'student'
        else {
            delete this.classOf
            return "professor"
        }
    }

    identifyClass(){
        if(this.isStudent) return 4 - (this.classOf - new Date().getFullYear())
        else return null
    }

    sort() {
        let sex = this.identifySex()
        let job = this.identifyJob()
        let year = this.identifyClass()

        if(sex === 'f' && job === 'student' && year === 1) return "1st year student Dorm for girls"
        if(sex === 'f' && job === 'student' && year === 2) return "2nd year student Dorm for girls"
        if(sex === 'f' && job === 'student' && year === 3) return "3rd year student Dorm for girls"
        if(sex === 'f' && job === 'student' && year === 4) return "4th year student Dorm for girls"

        if(sex === 'f' && job === 'professor' ) return "Female Professor Dorm"
        if(sex === 'm' && job === 'professor' ) return "Male Professor Dorm"
       
        if(sex === 'm' && job === 'student' && year === 1) return "1st year student Dorm for boys"
        if(sex === 'm' && job === 'student' && year === 2) return "1st year student Dorm for boys"
        if(sex === 'm' && job === 'student' && year === 3) return "1st year student Dorm for boys"
        if(sex === 'm' && job === 'student' && year === 4) return "1st year student Dorm for boys"
    }
}

let a = new Person('Elbek1', 2024, 'male', true)
let b = new Person('Elbek2', 2020, 'male', true)
let c = new Person('Elbek3', 2015, 'male', true)
let d = new Person('Elbek4', 2022, 'male', true)
let e = new Person('Elbek5', 2012, 'male', true)
let f = new Person('Elbek6', 2025, 'male', true)
let g = new Person('Elbek7', 2026, 'male', true)



