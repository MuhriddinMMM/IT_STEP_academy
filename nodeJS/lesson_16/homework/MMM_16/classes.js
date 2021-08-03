// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getCart() {}
//   order() {}
// }
// let user1 = new User("Elbek", 22);
// // console.log(user1);

// class Moderator extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.isModerator = true;
//   }
// }
// let moderator1 = new Moderator("Elbek", 22);
// // console.log(moderator1);
class Worker {
    constructor(firstname, lastname){
        this.firstname=firstname,
        this.lastname=lastname
    }
}


class Manager extends Worker{
    constructor(firstname, lastname, salary){
         super(firstname, lastname)
        this.salary=salary
    }
}

class DeputyDirector extends Manager{
    constructor(firstname, lastname, salary,car,office){
        super(firstname, lastname, salary);
        this.car =car
        this.office=office
    }
} 
class CEO extends DeputyDirector {
  constructor(firstname, lastname, salary,car,office, company) {
      super(firstname, lastname, salary, car, office);
      this.company=company
  }
}

let ceo1 = new CEO("Muhriddin", "Murodov", "$100000", "BMW x6" ,"blue glassed big office", "NewStarBukhara Company");
console.log(ceo1);

// Worker
// manager
// deputy director
// director
