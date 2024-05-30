// Step 1
const library = [
	{
		title: "The Road Ahead",
		author: "Bill Gates",
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: "Steve Jobs",
		author: "Walter Isaacson",
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: "Mockingjay",
		author: "Suzanne Collins",
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
];

// Step 2
for (let item of library) {
	item.status.read = true;
}
console.log(library);

// Step 3
const { title: firstBook } = library[0];
console.log(firstBook);

// Step 4
const str = JSON.stringify(library);
console.log(str);
