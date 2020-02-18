const { expect } = require('chai');
const bubbleSort = require('../src/bubblesort');

const unsorted = [2, 4, 5, 7, 3, 8, 6, 1];
const sorted = [1, 2, 3, 4, 5, 6, 7, 8];

describe('BubbleSort', () => {
  it('should sort an unsorted array', () => {
    expect(bubbleSort(unsorted)).to.be.deep.equal(sorted);
  });
});
