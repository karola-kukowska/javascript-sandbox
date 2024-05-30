//1

const getCelsius = (t) => `${(t - 32) / 1.8}\xB0C`;
console.log(getCelsius(32));

//2
// { min: 1, max: 5 }

const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });
console.log(minMax([1, 2, 3, 4, 5]));

//3
// On page load
//The area of a rectangle with a length of 10 and a width of 5 is 50.

(function (h, w) {
	console.log(
		`Current window is ${h}px heigh and ${w}px wide with an area of ${h * w}.`
	);
})(window.innerHeight, window.innerWidth);
