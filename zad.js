
// function fuck (n) {
//   let binSys = n % 2;
//   if (n === 1) {
//     console.log(binSys + 1)
//   }
// }
// fuck(5)

// let result = '';
// let i = 7;
// do {
//   i = i%2;
//   result = i +'';
// } while (i === 0)
// console.log(result)

// var num1 = "5";
// var num2 = parseInt(num1,2);
// console.log(num2); // 6




// function dataTransformations(num) {
//
//   let binaryNum = num.toString(2);
//
//     let decimalNumbers = 0
//     const arrayFromNum = Array.from(binaryNum)
//     for (let i = 0; i < arrayFromNum.length; i++) {
//       if (arrayFromNum[i] === '1') {
//         decimalNumbers++
//       }
//     }
//     return decimalNumbers
//
// }
//
// console.log(dataTransformations(5))


function cyclicShifts(num) {
  let binaryNum = num.toString(2);
  const arrayFromNum = Array.from(binaryNum)
  arrayFromNum.push(arrayFromNum.shift())
  let finNum = parseInt(arrayFromNum.join(''),2)
  return finNum
}

console.log(cyclicShifts(11))