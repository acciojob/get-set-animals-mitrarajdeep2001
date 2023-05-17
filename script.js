// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat subclass
class Cat extends Animal {
  // Method to purr
  purr() {
    console.log("purr");
  }
}

// Dog subclass
class Dog extends Animal {
  // Method to bark
  bark() {
    console.log("woof");
  }
}

// Example usage
// const animal = new Animal("Unknown");
// console.log(animal.species); // Output: Unknown
// animal.makeSound(); // Output: The animal makes a sound.

// const cat = new Cat("Cat");
// console.log(cat.species); // Output: Cat
// cat.makeSound(); // Output: The animal makes a sound.
// cat.purr(); // Output: purr

// const dog = new Dog("Dog");
// console.log(dog.species); // Output: Dog
// dog.makeSound(); // Output: The animal makes a sound.
// dog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
