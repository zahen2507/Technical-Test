const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  const oddArray = [];
  const evenArray = [];
  
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      evenArray.push(number[i]);
    } else {
      oddArray.push(number[i]);
    }
  }
  
  return [oddArray, evenArray];
}

console.log(result(number));
