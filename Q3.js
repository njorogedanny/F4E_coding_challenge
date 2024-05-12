function findTriplet(arr, sum) {
    var a = arr.length;
    // Sort the array
    arr.sort(function (x, y) { return x - y; });
    for (var i = 0; i < a - 2; i++) {
        var left = i + 1;
        var right = a - 1;
        while (left < right) {
            var currentSum = arr[i] + arr[left] + arr[right];
            if (currentSum === sum) {
                console.log("".concat(arr[i], ", ").concat(arr[left], ", ").concat(arr[right]));
                return true;
            }
            else if (currentSum < sum) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return false;
}
// Execute the example provided on the question:
var firstArray = [12, 3, 4, 1, 6, 9];
var sum1 = 24;
console.log("Output for first array:", findTriplet(firstArray, sum1));
var secondArray = [1, 2, 3, 4, 5];
var sum2 = 9;
console.log("Output for second array:", findTriplet(secondArray, sum2));
