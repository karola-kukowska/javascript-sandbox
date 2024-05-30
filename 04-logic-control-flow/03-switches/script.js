const d = new Date(2022, 1, 10, 19, 0, 0);
console.log(d.toLocaleDateString("pl-PL"));
//!!! Brad made a mistate here. Months are zero-based so Jan is actually 0!!
//const month = d.getMonth();
//correct:
console.log(d.getMonth());
const month = d.getMonth();
const hour = d.getHours();

// Immediate value evaluation
switch (month) {
	case 1:
		console.log("It is January");
		break;
	case 2:
		console.log("It is February");
		break;
	case 3:
		console.log("It is March");
		break;
	default:
		console.log("It is not Jan, Feb or March");
}

// Range evaluation
switch (true) {
	case hour < 12:
		console.log("Good Morning");
		break;
	case hour < 18:
		console.log("Good Afternoon");
		break;
	default:
		console.log("Good Night");
}
