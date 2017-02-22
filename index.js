module.exports = {
	after: (promise, callback) => {
		if (!(promise instanceof Promise)) throw new TypeError('\'promise\' has to be a Promise.');
		if (typeof callback !== 'function') throw new TypeError('\'callback\' has to be a function.');

		return promise.then(callback);
	},
	before: (promise, callforward) => {
		if (!(promise instanceof Promise)) throw new TypeError('\'promise\' has to be a Promise.');
		if (typeof callforward !== 'function') throw new TypeError('\'callforward\' has to be a function.');
		
		const beforePromisePromise = new Promise(callforward);
		
		return beforePromisePromise.then(() => promise);
	}
}
