function aVeryBigSum(ar) {
  return ar.reduce((total, num) => total + num);
}

const bigNumbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(bigNumbers));
