const NO_BRIBE = 0;

function minimumBribes(queue) {
	if (isEmptyOrOnlyOnePerson(queue)) {
		return NO_BRIBE;
	}
	let counter = 0;
	let max = queue[0];

	for (let i = 1; i < queue.length; i++) {
		if (max > queue[i]) {
			counter += 1;
		} else {
			max = queue[i];
		}
    }
    
	if (counter <= 3 ) return counter;
}

module.exports = minimumBribes;

function isEmptyOrOnlyOnePerson(queue) {
	return !queue || queue.length < 2;
}
