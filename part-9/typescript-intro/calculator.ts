// type Operation = 'multiply' | 'add' | 'divide';

// const calculator = (a: number, b: number, op: Operation): number | string => {
//   if (op === 'multiply') {
//     return a * b;
//   } else if (op === 'add') {
//     return a + b;
//   } else if (op === 'divide') {
//     if (b === 0) return "can't divide by 0";
//     return a / b;
//   }
// };
// console.log('using calculator', calculator(3, 5, 'divide'));

// calculator redefine to address to issue of a function return more than one type all none possible values shoukd throw errors
type Operation = 'multiply' | 'add' | 'divide';
type Result = number;
export const calculator = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error("can't divide by 0");
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide');
  }
};
try {
  console.log('using calculator', calculator(3, 5, 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
