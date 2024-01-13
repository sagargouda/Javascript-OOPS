const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const person1 = new Person("saga", 2002);

// console.log(person1.__proto__);
// console.log(person1.__proto__.__proto__);
// console.log(person1.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

const arr = [1, 2, 33, 3, 2];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
