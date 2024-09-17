//create a new class (template for creating many objects)

class Animal {
  static numberOfAnimals = 0;
  //every class needs a constructor and this is called when we create a new instance of the class
  constructor(name, age) {
    //this binds the parameter to the new instance of the class
    this.name = name;
    this.age = age;
    this.isLoved = true;
    //this will increase by one the number of animals static property every time there is a new animal created
    Animal.numberOfAnimals++;
  }
  run() {
    return `${this.name} is running`; // console.log("this is the this keyword inside the class", this);
  }
  sleep() {
    return "zzzzzzzzzz";
  }
  wasABadBoy() {
    this.isLoved = false;
  }
  isLovedAgain() {
    this.isLoved = true;
  }
}
//this is creating a new instance of the class Animal
// const dog = new Animal("Ragnar", 3);
// const NadosCat = new Animal("Babush", 6);
// console.log("dog before changing the isloved", dog);
// dog.wasABadBoy();
// console.log("dog after changing the isloved", dog);
// delete dog.isLoved;
// console.log("dog after changing back the isloved", dog);
// console.warn(NadosCat);
// dog.run();
// NadosCat.run();
// NadosCat.run();
// dog.sleep();

// console.log("this is free floating in the js file", this);
//console log this inside a function with the arrow function and then log this inside a function with the function keyword

//make a new class of Person with first name and last name and an isStudent property
// class Person {
//   constructor(name, surname, isStudent) {
//     this.firstName = name;
//     this.surname = surname;
//     this.isStudent = isStudent;
//     this.isCool = true;
//   }
// }

// const person1 = new Person("Joshua", "George", "not anymore");
// const person2 = new Person("Chandler", "Bing", "not anymore");
// const person3 = new Person("Joey", "Triviani", true);
// console.log(person1);
// person1.isCool = false;
// console.log(person1);
// console.log(person2);
// console.log(person3);

//********************Extending a previous class **************/
class Dog extends Animal {
  constructor(age, breed, name) {
    //when extending another class you have to use the 'super' keyword
    super(name, age);
    this.breed = breed;
  }
  sayWoof() {
    return "WOOF WOOF WOOF";
  }
  wasABadBoy() {
    return "He was bad but is still loved";
  }
}

//make a cat class that extends the Animal class and has a new method called sayMeow ... and eat catnip
//this is creating a new Dog class
const dog1 = new Dog(12, "mutt", "Buddy");
delete dog1.wasABadBoy;
console.log(dog1.wasABadBoy());

class Cat extends Animal {
  #owner;
  constructor(name, age, breed, owner) {
    super(name, age);
    this.breed = breed;
    this.#owner = owner;
  }
  sayMeow() {
    return `Meow meow meow`;
  }
  eatCatnip() {
    return;
    `nom nom nom`;
  }
  sayTheOwner() {
    return `the owner is ${this.#owner}`;
  }
}
const coolCat = new Cat("Babush", 6, "black cat", "Nado");
console.log("the name is", coolCat.name, "and the owner is ", coolCat.owner);
console.log(coolCat.sayTheOwner());
console.log("the number of animals total", Animal.numberOfAnimals);
