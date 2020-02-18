function bubbleSort(array, index = array.length - 1) {
  let i = 0;
  let j = 1;
  let last = array.length - 1;

  // while (last > 0) {
  if (index === 0) return array;
  else {
    while (index >= j) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      i += 1;
      j += 1;
    }

    return bubbleSort(array, index - 1);
  }

  //   i = 0;
  //   j = 1;
  //   last -= 1;
  // }

  return array;
}

module.exports = bubbleSort;
