function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  // Adding a method to the prototype
  Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
  let person1 = new Person("John", "Doe", 25);
let person2 = new Person("Jane", "Smith", 30);

console.log(person1.getFullName()); // "John Doe"
console.log(person2.getFullName()); // "Jane Smith"
console.log(person1)