const sort_array = (array) => {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      const temp = array[i];
      if (array[i] > array[j]) {
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;

};

const numbers = [16, 7, 10, 6, 13, 8, 15, 1, 3, 19, 14, 11, 4, 5, 20, 2, 9, 18, 12, 17];
const output = sort_array(numbers);
console.log(output);
