function reverseNumber(inputNumber: number): number {
    let reversedNum = 0;
    while (inputNumber > 0) {
        reversedNum = reversedNum * 10 + (inputNumber % 10);
        inputNumber = Math.floor(inputNumber / 10);
    }
    return reversedNum;
}

// Execute the example provided on the question:
const input = 1234;
const reversedNumber = reverseNumber(input);
console.log("Input:", input);
console.log("Reversed:", reversedNumber);


