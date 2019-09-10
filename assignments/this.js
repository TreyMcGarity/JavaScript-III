/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global- "this" directly refers to the console/window. 
* 2. Implicit- "this" refers to the object that "this" lies in.
* 3. New- "this" refers to the instance of the object created and returned by the constructor.
* 4. Explicit- used with Javascript built-in apply/call methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
  console.log(this);
  return name;
};
sayName("Trey");

// Principle 2

// code example for Implicit Binding
const Object = {
    name: 'Trey',
    intro: function(person) {
        return `Hello, I am ${this.name}. How are you ${person}`;
    }
};
Object.intro("Daniel");
// Principle 3

// code example for New Binding
const animal = new Animal('parameter');
function Animal(food) {
  this.food = food;
  this.eat = function() {
  console.log(`This animal likes to eat ${this.food}.`);
  }
}
const wolf = new Animal('meat');
console.log(wolf);
wolf.eat();

// Principle 4

// code example for Explicit Binding
const parent = {
      name: 'Mom'
    }
    const child = {
      name: 'Baby'
    }
    const ability = ["laugh", "play"];

    function can_Do (doFirst, doSecond) {
      console.log(this);
      return `I am ${this.name}! I can ${doFirst} and ${doSecond}.`;
    }
    
    console.log(can_Do.apply(parent, ability));
    console.log(can_Do.apply(child, ability));