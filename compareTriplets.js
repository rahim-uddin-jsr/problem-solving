function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  if (a[0] > b[0]) {
    alice += 1;
  } else if (a[0] < b[0]) {
    bob += 1;
  }
  if (a[1] > b[1]) {
    alice += 1;
  } else if (a[1] < b[1]) {
    bob += 1;
  }
  if (a[2] > b[2]) {
    alice += 1;
  } else if (a[2] < b[2]) {
    bob += 1;
  }
  return [alice, bob];
}
const a = [5, 6, 7];
const b = [3, 6, 10];
const c = [17, 28, 30];
const d = [99, 16, 8];
console.log(compareTriplets(a, b));
console.log(compareTriplets(c, d));
