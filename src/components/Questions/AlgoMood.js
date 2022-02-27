let recordedAnswers = [];

function addAnswer(answer) {
	recordedAnswers.push(answer);
}

function resetMood() {
	recordedAnswers = [];
}

function calculateScore() {
	const mood = recordedAnswers
		.sort((a, b) => {
			return (
				recordedAnswers.filter((answer) => answer === a).length -
				recordedAnswers.filter((answer) => answer === b).length
			);
		})
		.pop();
		return mood;
}

export {addAnswer, resetMood, calculateScore}