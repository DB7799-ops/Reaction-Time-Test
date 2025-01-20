const startButton = document.getElementById('startButton');
const testBox = document.getElementById('testBox');
const result = document.getElementById('result');
const instructions = document.getElementById('instructions');

let startTime, endTime;
let timeoutId;

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    instructions.textContent = "Wait for the box to turn green...";
    testBox.classList.add('hidden');

    const randomDelay = Math.floor(Math.random() * 5000) + 1000; // 1-5 seconds

    timeoutId = setTimeout(() => {
        testBox.style.backgroundColor = 'green';
        testBox.classList.remove('hidden');
        startTime = Date.now();
    }, randomDelay);
});

testBox.addEventListener('click', () => {
    if (!startTime) {
        result.textContent = "Too soon! Wait for the box to turn green.";
        resetTest();
    } else {
        endTime = Date.now();
        const reactionTime = endTime - startTime;
        result.textContent = `Your reaction time is ${reactionTime} ms.`;
        resetTest();
    }
});

function resetTest() {
    clearTimeout(timeoutId);
    startButton.style.display = 'inline-block';
    testBox.classList.add('hidden');
    testBox.style.backgroundColor = 'red';
    startTime = null;
    endTime = null;
    instructions.textContent = "Click 'Start' to try again!";
}

