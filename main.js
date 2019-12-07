let numberOfnumberWithDualDigits = 0;
let numberOfnumberWithTripleDigits = 0;
let numberOfnumberWithFourDigits = 0;

const startNumber = 10000;
const endNumber = 99999;
const totalNumbers = endNumber - startNumber + 1;

for (let number = startNumber; number < endNumber + 1; number++) {
  const numberAsString = number + "";
  let isNumberWithDualDigits = false;
  let isNumberWithTripleDigits = false;
  let isNumberWithFourDigits = false;
  for (let i = 0; i < numberAsString.length; i++) {
    if (
      i > 0 &&
      !isNumberWithDualDigits &&
      numberAsString[i] === numberAsString[i - 1]
    ) {
      isNumberWithDualDigits = true;
      numberOfnumberWithDualDigits++;
    }

    if (
      i > 1 &&
      !isNumberWithTripleDigits &&
      numberAsString[i] === numberAsString[i - 1] &&
      numberAsString[i - 1] === numberAsString[i - 2]
    ) {
      isNumberWithTripleDigits = true;
      numberOfnumberWithTripleDigits++;
    }

    if (
      i > 2 &&
      !isNumberWithFourDigits &&
      numberAsString[i] === numberAsString[i - 1] &&
      numberAsString[i - 1] === numberAsString[i - 2] &&
      numberAsString[i - 2] === numberAsString[i - 3]
    ) {
      isNumberWithFourDigits = true;
      numberOfnumberWithFourDigits++;
    }
  }
}

console.log(`Total numbers checked: ${totalNumbers}`);
console.log(`Numbers with dual digits: ${numberOfnumberWithDualDigits}`);
console.log(`Numbers with triple digits: ${numberOfnumberWithTripleDigits}`);
console.log(`Numbers with four digits: ${numberOfnumberWithFourDigits}`);
console.log(
  `Percentage of dual digit numbers: ${(numberOfnumberWithDualDigits * 100) /
    totalNumbers}`
);
console.log(
  `Percentage of triple digit numbers: ${(numberOfnumberWithTripleDigits *
    100) /
    totalNumbers}`
);
console.log(
  `Percentage of four digit numbers: ${(numberOfnumberWithFourDigits * 100) /
    totalNumbers}`
);
