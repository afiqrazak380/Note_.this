// In JavaScript, the keyword "this" is used to refer to the current object or context within a function or method. 
// Its behavior can vary depending on where it's used. Here are some common scenarios where "this" is used in JavaScript:

//1. Inside an Object methode
const person = {
  name : 'Alice',
  age: 5,
  sayHello: function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age}`);
  }
}
person.sayHello()
//In this case, "this" refers to the object that the method is called on, which is the "person" object.
//So, "this.name" refers to the "name" property of the "person" object.


//============
// 2. Inside a Constructor Function
function car(maker, model){ /*car constructor*/
  this.maker = maker;
  this.model = model;
}

const myCar = new car('Toyota', 'Vios');
console.log(myCar)
//Inside a constructor function, "this" refers to the new object being created by the constructor. 
//In this example, "this.make" and "this.model" are properties of the new "myCar" object.


//========
//3. Inside Event Handlers
const button = document.getElementById('myButton');
button.addEvenListener('click', function(){
  console.log(this);// Refers to the button element
})
//Inside event handlers, "this" typically refers to the DOM element that triggered the event. 
//In this example, "this" refers to the "button" element.
