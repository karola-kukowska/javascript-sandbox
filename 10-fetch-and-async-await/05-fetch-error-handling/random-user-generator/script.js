async function getUser() {
	try {
		showSpinner();
		const res = await fetch("https://randomuser.me/api/");
		if (!res.ok) {
			throw new Error();
		}
		const data = await res.json();
		const {
			email,
			gender,
			phone,
			name: { first: firstName },
			name: { last: lastName },
			location: { city },
			location: { country },
			dob: { age },
			picture: { large: img },
		} = await data.results[0];
		const user = {
			email,
			gender,
			phone,
			name: `${firstName} ${lastName}`,
			location: `${city} ${country}`,
			age,
			img,
		};
		displayUser(user);
		hideSpinner();
	} catch (error) {
		hideSpinner();
		document.querySelector("#user").innerHTML = `
      <p class="text-xl text-center text-red-500 mb-5">
      Oops... something went wrong :(</p>`;
	}
}

function displayUser(user) {
	const userDisplay = document.querySelector("#user");

	if (user.gender === "female") {
		document.body.style.backgroundColor = "rebeccapurple";
	} else {
		document.body.style.backgroundColor = "steelblue";
	}

	userDisplay.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.img}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.age}</p>
    </div>
  </div>
</div>
  `;
}

function showSpinner() {
	document.querySelector(".spinner").style.display = "block";
}

function hideSpinner() {
	document.querySelector(".spinner").style.display = "none";
}

document.querySelector("#generate").addEventListener("click", getUser);

getUser();
