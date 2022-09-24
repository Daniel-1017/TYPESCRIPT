import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from "./product.model";

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 12.99 },
];

// class validator package
const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

console.log("manually doing it");
// manually doing it
const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (let prod of loadedProducts) {
  console.log(prod.getInformation());
}

console.log("using 3rd party library class-transformer");
// using 3rd party library class-transformer
const loadedProducts2 = plainToClass(Product, products);

for (let prod of loadedProducts2) {
  console.log(prod.getInformation());
}
