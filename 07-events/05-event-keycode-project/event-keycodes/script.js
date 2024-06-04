const root = document.getElementById("insert");

const createKey = (type, value) => {
	const div = document.createElement("div");
	div.setAttribute("class", "key");
	div.innerHTML = `${value}<small>${type}</small>`;
	return div;
};

document.addEventListener("keypress", (e) => {
	root.replaceChildren(
		createKey("e.key", e.key === " " ? e.code : e.key),
		createKey("e.keyCode", e.keyCode),
		createKey("e.code", e.code)
	);
});
