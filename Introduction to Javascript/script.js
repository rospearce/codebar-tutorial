function hello(person) {
  console.log(greeting(person));
}
function conversation(person, topic) {
  hello(person);
  console.log('How are you?');
  console.log(howdoyoulike(topic));
  console.log('Goodbye');
}
function greeting(person) {
	return 'Hello ' + person + '!'
}
function howdoyoulike(topic) {
	return 'Do you like ' + topic + '?'
}
var person_a = {
    first_name: "Archibald",
    likes: "owls",
	greet: function (greeting) {
		return greeting + " " + this.first_name;
	}
};
var person_b = person_a;

console.log("Before");
console.log(person_a.first_name);
console.log(person_b.first_name);

conversation(person_a.first_name, person_a.likes);

person_a.first_name = "Rosa";

console.log("After");
console.log(person_a.first_name);
console.log(person_b.first_name);


// This is where all the practise code from the Introduction to Javascript tutorial goes

