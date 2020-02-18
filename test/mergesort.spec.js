const { expect } = require('chai');
const { split, merge, mergeSort } = require('../src/mergesort');

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4, 5])).to.be.deep.equal([
      [1, 2, 3],
      [4, 5]
    ]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1, 5, 17], [67, 90])).to.be.deep.equal([1, 5, 17, 67, 90]);
  });
});

describe('Merge sort function', function() {
  it('merge sorts an usorted array', function() {
    expect(mergeSort([-10, 15, 1, 27, 4, 99])).to.be.deep.equal([
      -10,
      1,
      4,
      15,
      27,
      99
    ]);
  });
});
