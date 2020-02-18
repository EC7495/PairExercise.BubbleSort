const split = array => {
  const midPoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midPoint);
  const secondHalf = array.slice(midPoint);

  return [firstHalf, secondHalf];
};

const merge = (first, second) => {
  const sortedArray = [];
  const firstArray = first;
  const secondArray = second;

  while (firstArray.length && secondArray.length) {
    if (firstArray[0] < secondArray[0])
      sortedArray.push(firstArray.splice(0, 1)[0]);
    else sortedArray.push(secondArray.splice(0, 1)[0]);
  }

  if (firstArray.length) sortedArray.push(...firstArray);
  if (secondArray.length) sortedArray.push(...secondArray);

  return sortedArray;
};

// recursive
const mergeSort = array => {
  if (array.length === 1) return array;
  const [firstHalf, secondHalf] = split(array);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

module.exports = {
  split,
  merge,
  mergeSort
};
