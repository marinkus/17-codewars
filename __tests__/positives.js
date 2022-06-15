const arr = [10, 5, 2, 7, 8];

function positiveSum(arr) {
  for (let i=0; i < arr.length; i++) {
    const number = arr[i];
    const posFilter = arr
    .filter(number => number > 0)
    .reduce(total + number);
    console.log(posFilter);
  }
}






