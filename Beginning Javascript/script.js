// used in lesson2.html

// different types of values: strings, numbers, objects (which can have a number of attributes) and then booleans which are either true or false.

// opposite of === is !==

var apples = "apples";
var oranges = "oranges";

var notEqual = apples !== oranges;
console.log("Apples and oranges are different: " + notEqual);

// you can use greater and less than operators

var coaches = 20;
var students = 24;
var pizzas = 25;

var people = coaches + students;

if (people > pizzas) {
  console.log("We have more people than pizzas!");
}

if (students > pizzas) {
  console.log("But we have more students than pizzas! Let's not give the coaches any food.");
}

// a loop is used to execute a set of statments repeatedly until a condition is met. If the test is true then the statements in the curly braces are executed. If false then the while loop is skipped. It is different from the if statement because with if everything is finished whereas with the while statement we go back up to the test until the test is false. This is why we call it a loop


//sums all the numbers up to ten. here the equals sign denotes that you are assigning something to something else, it's not quite the same meaning as in maths where things are exactly the same. that would be '==='

var i = 1;
var total = 0;

while (i <= 10) {
  total = total + i;
  i = i + 1;
}

console.log("Total: " + total);

// the for loop offers the same behaviour as the while loop but arranged in a way that is often more convenient eg. for (/* before loop starts */; /* test before each iteration */; /* after each iteration */) {
	//set of statements}
	
// the aobve while loop written as a for loop
	
	var total = 0;
	var i;

	for (i = 1; i <= 10; i = i + 1) {
	  total = total + i;
	}

	console.log("Total: " + total);

// an array is a simple data structure. It can hold lists of element. each element can be accessed using the index, which starts at 0.
	
	var animals = [ "dog", "cat", "rabbit", "horse", "elephant", "monkey" ];
	
// to retrieve an item we use square bracket notation
	
	console.log(animals[0]);
	
//the length property returns the size of the array. eg. you can use it with a for loop to log each entry of animals. note that we go up to, but do not include, animals.length as an index...this is because arrays are always indexed from 0.
	
	var i;

	for (i = 0; i < animals.length; i = i + 1) {
	  var animal = animals[i];

	  console.log(animal);
	}
	
// 'method' is usually used to mean a function that belongs to an object..it's common to see them used with the dot notation. array.push(object) adds an element to the end of the array while array.unshift(object) adds an element to the beginning of the array.
	
	animals.push("zebra");

	animals.unshift("cow");
	
//array.pop() removes and returns the last element
	
var z =	animals.pop();
	
	for (i = 0; i < animals.length; i = i + 1) {
	  var animal = animals[i];

	  console.log(animal);
	}
	
//Analogously, array.shift() removes and returns the first element of the array
	
	
// to order the elements of an array we can use sort ()
	
	var names = [ "Jane", "Barry", "Helen", "David", "Sam" ];

	names.sort();

	console.log(names);
	
// so sort has sorted the array in alphabetical order, but beware of special characters and capital letters. it be customised to sort things any way you like, and can take a function as an argument to tell it what to do
	
	function sortNumbersAscending(a, b) {
	    return a - b;
	}

	var nums = [ 1, 5, 3, 19, 2, 10 ];

	nums.sort(sortNumbersAscending);

	console.log(nums);
	
// another operation is reverse()
	
	animals.sort().reverse();
	
	console.log(animals);
	
//write function to sort numbers descending
	
	function sortNumbersDescending(a,b) {
		return b-a;
	}
	
	nums.sort(sortNumbersDescending);

	console.log(nums);
	
// more loops
	
	var fruitAndVeg = [ "apple", "orange", "banana", "kiwi", "avocado", "celery", "aubergine" ];
	var noAvocados = [];

	for (var i = 0; i < fruitAndVeg.length; i = i + 1) {
	  if (fruitAndVeg[i] !== "avocado") {
	    noAvocados.push(fruitAndVeg[i]);
	  }
	}
	
	console.log(noAvocados);
	
//the DOM (won't work unless in inspector as script loaded first)
	
	
//write a function that lists all DOM  children elements
	
	function listDomElements() {
	  var children = document.body.childNodes;
	  var i;

	  for (i = 0; i <  children.length; i = i + 1) {
	    console.log(children[i]);
	  }
	}
	
	

	
	
	