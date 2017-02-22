const beforeafter = require('..');

const somePromise = new Promise((res) => {
	setTimeout(() => {
		res("Hello, world!");
	}, 5000);
});

beforeafter.after(somePromise, (message) => {
	console.log(message);
});

const anotherPromise = new Promise(() => {
	setTimeout(() => {
		console.log("Before promise: Hello, world!");
	}, 5000);
});

beforeafter.before(anotherPromise, () => {
	console.log('This needs to happen before my promise! It is very important.');
});
