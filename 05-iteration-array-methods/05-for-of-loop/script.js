// Loop through arrays
const items = ["book", "table", "chair", "kite"];
const users = [{ name: "Brad" }, { name: "Kate" }, { name: "Steve" }];

/* 
//sneaky way of getting index -- does not work on array of objects
for (const [index, item] of items.entries()) {
	console.log(index, item);
}
or use for ... in loop as it iterates over index rather then array item
for (const index in items) {
  console.log(index, items[index]);
}
*/

/* for (let user of users) {
	console.log(user.name);
} */

// Loop over strings
const str = "Hello World";

for (const letter of str) {
	console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
	console.log(key, value);
}
