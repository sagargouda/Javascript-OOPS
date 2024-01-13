// const Person = function (first, birth) {
//   this.first = first;
//   this.birth = birth;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birth);
// };

// // constructor for student

// const student = function (first, birth, course) {
//   // this.first = first;
//   // this.birth = birth;
//   Person.call(this, first, birth);
//   this.course = course;
// };
// student.prototype = Object.create(Person.prototype);

// student.prototype.introduce = function () {
//   console.log(
//     `my name is ${this.first} and i was born in ${this.birth} and taken course of ${this.course}`
//   );
// };

// const sagar = new student("sagar", 2002, "Computer");
// sagar.introduce();
