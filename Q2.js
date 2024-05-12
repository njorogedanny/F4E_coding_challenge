function reverseNumber(inputNumber) {
    var reversedNum = 0;
    while (inputNumber > 0) {
        reversedNum = reversedNum * 10 + (inputNumber % 10);
        inputNumber = Math.floor(inputNumber / 10);
    }
    return reversedNum;
}
// Execute the example provided on the question:
var input = 1234;
var reversedNumber = reverseNumber(input);
console.log("Input:", input);
console.log("Reversed:", reversedNumber);
