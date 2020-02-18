function bubbleSort(array, index = array.length - 1) {
  let i = 0;
  let j = 1;

  if (index === 0) return array;

  while (index >= j) {
    if (array[i] > array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
    }

    i += 1;
    j += 1;
  }

  return bubbleSort(array, index - 1);
}

module.exports = bubbleSort;
