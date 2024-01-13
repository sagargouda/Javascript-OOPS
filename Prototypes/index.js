const Person = function (firstName, birthYear) {
  (this.firstName = "sagar"), (this.birthYear = 2002);
};

Person.prototype.calcAge = function () {
  return 2038 - this.birthYear;
};

const person1 = new Person("sagar", 2002);
// console.log(person1.calcAge());
// console.log(person1);

//?? each object has property called __proto__

// console.log(person1.__proto__);

console.log(Person.prototype.isPrototypeOf(person1));
