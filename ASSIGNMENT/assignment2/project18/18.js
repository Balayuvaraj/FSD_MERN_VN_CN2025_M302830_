function startExam(callback) {
    console.log("Exam started");
    setTimeout(callback, 1000);
}

function evaluateExam(callback) {
    console.log("Evaluating answers");
    setTimeout(callback, 1000);
}

function declareResult() {
    console.log("Result declared");
}

startExam(() => evaluateExam(declareResult));
