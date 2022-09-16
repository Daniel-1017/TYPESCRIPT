const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  // we use void if the function doesn't return anything
  console.log(num);
};

let combineValues: (a: number, b: number) => number; // function typs

combineValues = add;
// combineValues = printResult; => this return an error

printResult(add(10, 20));

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(10, 5, (result) => console.log(result));
