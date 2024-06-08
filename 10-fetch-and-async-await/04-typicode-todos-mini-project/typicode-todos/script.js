const url = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
	try {
		//fetch todos
		const res = await fetch(url + "?_limit=10");
		if (!res.ok) {
			thr;
		}
		const data = await res.json();
		//display on screen
		data.forEach((element) => {
			displayTodo(element);
		});
	} catch (error) {
		//display error msg on screen
		document
			.getElementById("todo-list")
			.appendChild(document.createTextNode("Ooops... sth went wrong"));
	}
}

function displayTodo(todo) {
	//create div element for each item
	const div = document.createElement("div");
	div.classList.add("todo");
	div.classList.toggle("done", todo.completed);
	div.appendChild(document.createTextNode(todo.title));
	div.setAttribute("data-id", todo.id);
	const icon = document.createElement("i");
	icon.classList = "fa-solid fa-xmark";
	div.appendChild(icon);
	document.getElementById("todo-list").appendChild(div);
}

async function addTodo(e) {
	e.preventDefault();
	try {
		//get data from input
		//alternative: e.target.firstElementChild.value
		const title = document.getElementById("title").value;

		if (!title) {
			alert("Please add a item");
			return;
		}
		const newTodo = {
			title,
			completed: false,
			userId: 1,
		};
		//PUT request on server
		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify(newTodo),
			headers: {
				"Content-type": "application/json",
			},
		});
		console.log(res);

		//get id given back by server
		const { id } = await res.json();
		newTodo.id = id;

		//display on screen
		displayTodo(newTodo);

		//reset form
		document.getElementById("todo-form").reset();
	} catch (error) {
		console.log(error);
	}
}

async function removeTodo(e) {
	// +++ Changed to X icon because I didn't like dbl click +++
	try {
		//DELETE request on server
		const id = e.target.parentNode.attributes["data-id"].value;
		const res = await fetch(`${url}/${id}`, {
			method: "DELETE",
		});
		console.log(res);

		//remove from DOM
		e.target.parentNode.remove();
	} catch (error) {
		console.log(error);
	}
}

async function toggleTodo(e) {
	if (e.target.localName === "i") {
		//if X icon clicked execute removeTodo instead
		removeTodo(e);
		return;
	} else if (!e.target.classList.contains("todo")) {
		//ignore event if any space outside div elements is clicked
		return;
	}

	//toggle completed state on item
	try {
		const id = e.target.attributes["data-id"].value;
		const isDone = e.target.classList.contains("done");

		//change bg color on screen
		e.target.classList.toggle("done");

		//PATCH request on server
		const res = await fetch(`${url}/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				id: id,
				completed: isDone,
			}),
		});

		console.log(res);
		if (!res.ok) {
			throw new Error();
		}
	} catch (error) {
		console.log(error);
	}
}

function init() {
	document.addEventListener("DOMContentLoaded", getTodos);
	document.getElementById("todo-list").addEventListener("click", toggleTodo);
	// document.getElementById("todo-list").addEventListener("dblclick", removeTodo);
	document.getElementById("todo-form").addEventListener("submit", addTodo);
}

init();
