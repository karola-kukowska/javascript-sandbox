const form = document.getElementById("item-form");
const inputField = document.getElementById("item-input");
const filterField = document.getElementById("filter");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const LOCAL_STORAGE_KEY = "shopping list";

const initializeList = () => {
	toggleFilter();
	const list = getList();

	//is this condition readable? same as getList.length > 0
	if (!getList.length) {
		list.forEach((item) => createItem(item));
	}
};

const getList = () => {
	const list = localStorage.getItem(LOCAL_STORAGE_KEY);
	return list === null ? [] : JSON.parse(list);
};

const appendList = (item) => {
	const list = getList();
	if (list.indexOf(item) < 0) {
		list.push(item);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
	}
};

const createItem = (name) => {
	//create li element
	const i = document.createElement("i");
	i.setAttribute("class", "fa-solid fa-xmark");
	const btn = document.createElement("button");
	btn.setAttribute("class", "remove-item btn-link text-red");
	btn.appendChild(i);
	const li = document.createElement("li");
	li.textContent = name;
	li.appendChild(btn);

	//append li to ul element
	itemList.appendChild(li);
};

const onSubmit = (e) => {
	e.preventDefault();
	const input = document.getElementById("item-input");
	let item = input.value;
	if (!item) {
		alert("Please add an item");
		return;
	} else {
		item = item.toLowerCase();
	}

	//check for existing item
	const list = getList();
	if (list.indexOf(item) < 0) {
		createItem(item);
		appendList(item);
	}

	//reset form to initial state
	form.reset();

	//add clear btn and filter if not present
	toggleFilter();
};

const removeItem = (e) => {
	if (e.target.localName === "i") {
		const li = e.target.parentNode.parentNode;

		//remove from DOM
		e.currentTarget.removeChild(li);

		//remove from local storage
		const list = getList();
		const newList = list.filter((item) => item != li.textContent);
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
	}

	//remove clear btn and filter if last item was removed
	toggleFilter();
};

const clearItems = () => {
	const itemList = document.getElementById("item-list");
	while (itemList.firstChild) {
		// From stackoverflow: in computer-science, in general, it's significantly faster to remove the last element of a collection than it is to remove the first element (depending on how the collection is implemented).
		itemList.removeChild(itemList.lastChild);
	}
	localStorage.removeItem(LOCAL_STORAGE_KEY);

	//remove clear btn and filter
	toggleFilter();
};

const filterItems = (e) => {
	const filter = e.target.value.toLowerCase();
	const list = document.querySelectorAll("li");

	list.forEach((item) => {
		if (item.textContent.includes(filter)) {
			item.classList.remove("hidden");
		} else {
			item.classList.add("hidden");
		}
	});
};

const toggleFilter = () => {
	const list = getList();

	if (!list.length) {
		[filterField, clearBtn].forEach((el) => el.classList.add("hidden"));
	} else {
		[filterField, clearBtn].forEach((el) => el.classList.remove("hidden"));
	}
};

form.addEventListener("submit", onSubmit);
clearBtn.addEventListener("click", clearItems);
itemList.addEventListener("click", removeItem);
filterField.addEventListener("input", filterItems);
document.addEventListener("DOMContentLoaded", initializeList);

//testing
const addTestList = () => {
	["milk", "apples", "sugar"].forEach((item) => {
		appendList(item);
	});
};

//addTestList();
