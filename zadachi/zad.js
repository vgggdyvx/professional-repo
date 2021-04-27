
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


// function cyclicShifts(num) {

//   let binaryNum = num.toString(2);
//   const arrayFromNum = Array.from(binaryNum)
//   arrayFromNum.push(arrayFromNum.shift())
//   let finNum = parseInt(arrayFromNum.join(''),2)
//   console.log(finNum)

//   let binaryNum1 = finNum.toString(2)
//   const arrayFromNum1 = Array.from(binaryNum1)
//   arrayFromNum1.push(arrayFromNum1.shift())
//   let finNum1 = parseInt(arrayFromNum1.join(''),2)
//   console.log(finNum1)

//   let binaryNum2 = finNum1.toString(2)
//   const arrayFromNum2 = Array.from(binaryNum2)
//   arrayFromNum2.push(arrayFromNum2.shift())
//   let finNum2 = parseInt(arrayFromNum2.join(''),2)
//   console.log(finNum2)

//   let binaryNumFinal = finNum2.toString(2)
//   const arrayFromNumFinal = Array.from(binaryNumFinal)
//   arrayFromNumFinal.push(arrayFromNumFinal.shift())
//   let finNumFinal = parseInt(arrayFromNumFinal.join(''),2)
//   console.log(finNumFinal)

// }

// cyclicShifts(11)

function cyclicShifts(num) {
let odNum = [0111, 1110, 1101, 1011]
let arayNum = odNum.tostring(2)
console.log(arayNum)
}