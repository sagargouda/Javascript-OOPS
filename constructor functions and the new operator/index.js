"use strict";

//??

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //?? don't do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const person1 = new Person("sagar", 2002);
console.log(person1);

//?? opeartor to check if it is instance or not
console.log(person1 instanceof Person);
