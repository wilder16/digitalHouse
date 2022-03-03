let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < myArray.length; i++) { sum += myArray[i]; }
console.log(sum);
sum = 0;
myArray.forEach(numero => { sum += numero;});
console.log(sum);