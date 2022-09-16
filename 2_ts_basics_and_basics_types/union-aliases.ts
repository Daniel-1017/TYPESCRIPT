type Combinable = number | string;
type ConversionDescription = "as-number" | "as-string";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) => {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
};

// with literal types you can allow an exact value which a string, number, or boolean must have

const combinedAges = combine(30, 20, "as-number");
const combinedNames = combine("Max", "Marta", "as-string");
console.log(combinedAges, combinedNames);
