function converter(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(converter([1, 2, 4, 3, 5, 3, 2, 1]));

function sumConverter(arr, sli) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  const sum = arr.slice(0, sli).reduce((a, b) => a + b, 0);
  return sum;
}

console.log(sumConverter([1, 2, 4, 3, 5, 3, 2, 1], 3));

const otest = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

const getObjectValues = (obj) =>
  obj && typeof obj === "object"
    ? Object.values(obj).map(getObjectValues).flat()
    : [typeof obj === "string" ? 0 : obj];

getObjectValues(otest).reduce((a, b) => a + b, 0);

console.log(getObjectValues(otest).reduce((a, b) => a + b, 0));
