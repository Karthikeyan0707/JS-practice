// //using function

// //PROTOTYPE
function Person(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
}
const person1 = new Person("SK", "Karthik");
const person2 = new Person("Ram", "Kumar");

// person1.getfullname
Person.prototype.getfullname = function () {
  return this.firstname + " " + this.lastname;
};
console.log(person1.getfullname());
console.log(person2.getfullname());

// //PROTOTYPAL INHERITANCE
// function SuperHero(fname, lname) {
//   // this={
//   Person.call(this, fname, lname); //inheriting from person function . 'This' keyword in Person will now refer to 'this' keyword in Superhero.
//   this.isSuperHero = true;
// }
// //defining fight crime function
// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting Crime");
// };

// //to inherit the getfullname we use object.create method
// SuperHero.prototype = Object.create(Person.prototype);

// //creating an instance of superhero function
// const batman = new SuperHero("SK", "Karthik");
// SuperHero.prototype.constructor = SuperHero; //to avoid JS think that a superhero is created from function
// console.log(batman.getfullname());

//Using Class
// class Person {
//   construtor(fname, lname) {
//     this.firstname = fname;
//     this.lastname = lname;
//   }
//   saymyname() {
//     return this.firstname + " " + this.lastname;
//   }
// }

// const classP1 = new Person("SK", "Karthik");
// console.log(classP1.saymyname());

// class SuperHero extends Person {
//   construtor(fname, lname) {
//     this.isSuperhero = true;
//     // super(fname, lname);
//   }
//   fightcrime() {
//     console.log("Fighting Crime");
//   }
// }

// const batman = new SuperHero("SK", "Karthik");
// console.log(batman.saymyname());
