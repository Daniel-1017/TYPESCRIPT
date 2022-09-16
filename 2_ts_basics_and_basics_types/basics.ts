const add = (n1: number, n2: number, showResutl: boolean, phrase: string) => {
  if (showResutl) {
    console.log(`${phrase} ${n1 + n2}`);
  } else {
    return n1 + n2;
  }
};

const number1 = 5;
const number2 = 10;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);

// js => js uses dynamic types (resolved at runtime)
// ts => uses static types (set during development)
