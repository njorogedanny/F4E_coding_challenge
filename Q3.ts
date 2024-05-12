function findTriplet(arr: number[], sum: number): boolean {
    const a = arr.length;

    // Sort the array
    arr.sort((x, y) => x - y);

    for (let i = 0; i < a - 2; i++) {
        let left = i + 1;
        let right = a - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];
            if (currentSum === sum) {
                console.log(`${arr[i]}, ${arr[left]}, ${arr[right]}`);
                return true;
            } else if (currentSum < sum) {
                left++;
            } else {
                right--;
            }
        }
    }
    return false;
}

// Execute the example provided on the question:
const firstArray = [12, 3, 4, 1, 6, 9];
const sum1 = 24;
console.log("Output for first array:", findTriplet(firstArray, sum1));

const secondArray = [1, 2, 3, 4, 5];
const sum2 = 9;
console.log("Output for second array:", findTriplet(secondArray, sum2));
