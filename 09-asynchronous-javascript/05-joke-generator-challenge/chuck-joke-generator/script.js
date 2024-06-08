const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

async function getJoke() {
	try {
		const res = await fetch("https://api.chucknorris.io/jokes/random");
		if (!res.ok) {
			throw new Error();
		}
		const resData = await res.json();
		const joke = await resData.value;
		jokeEl.innerText = joke;
	} catch (error) {
		jokeEl.innerText = "Oops... Something went wrong";
	}
}

getJoke();

jokeBtn.addEventListener("click", getJoke);

//Alternative .then syntax
// function getJoke() {
// 	fetch("https://api.chucknorris.io/jokes/random")
// 		.then((res) => {
// 			if (!res.ok) {
// 				throw new Error();
// 			}
// 			return res.json();
// 		})
// 		.then((data) => data.value)
// 		.then((joke) => (jokeEl.innerText = joke))
// 		.catch(() => (jokeEl.innerText = "Oops... Something went wrong"));
// }

// getJoke();

// jokeBtn.addEventListener("click", getJoke);
