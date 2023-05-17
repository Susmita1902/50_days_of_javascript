function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    var random = Math.random();

	return Math.ceil(random * (rangeEnd - rangeStart)) + rangeStart;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 10)}`)