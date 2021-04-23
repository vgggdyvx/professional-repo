// const a = 1
// console.log(a ** 2)
// const a1 = 2
// console.log(a1 ** 2)
// const a2 = 3
// console.log(a2 ** 2)
// const a3 = 4
// console.log(a3 ** 2)
// const a4 = 5
// console.log(a4 ** 2)
// const a5 = 6
// console.log(a5 ** 2)
// const a6 = 7
// console.log(a6 ** 2)
// const a7 = 8
// console.log(a7 ** 2)
// const a8 = 9
// console.log(a8 ** 2)
// const a9 = 10
// console.log(a9 ** 2)

// const squareNumber = number => number ** 2
//
// console.log(squareNumber(1))
// console.log(squareNumber(2))
// console.log(squareNumber(3))
// console.log(squareNumber(4))
// console.log(squareNumber(5))
// console.log(squareNumber(6))
// console.log(squareNumber(7))
// console.log(squareNumber(8))
// console.log(squareNumber(9))
// console.log(squareNumber(10))

// for (let counterOne = 1; counterOne < 11; counterOne++){
//   console.log(counterOne ** 2 );
// }

//
// let n = 35;
// console.log(Math.floor(n/10), n%10)

//
// function splitNumber(num) {
//   let arr = Array.from(String(num));
//   console.log( parseInt(arr[0]), parseInt(arr[1]) )
// }
//
// for (let i=10; i<=99; i++) {
//   splitNumber(i)
// }

// let listNumber = lengthOfNumber(35269267892) ;
// console.log(listNumber.length)

// function  lengthOfNumber(n){
//   console.log(String(n).length)
// }
//
// lengthOfNumber(3728975986)


// const vowels = ['A', 'E', 'I', 'O', 'U', 'Y']
// function numberOfLetters(word) {
//   let vowelsNumber = []
//   const arrayFromWord = Array.from(word)
//   for (let i = 0; i < arrayFromWord.length; i++) {
//     for (let j = 0; j < vowels.length; j++){
//       if (arrayFromWord[i].toUpperCase() === vowels[j]) {
//         vowelsNumber.push(vowels[j])
//       }
//     }
//   }
//   return vowelsNumber.length
// }
//
// console.log(numberOfLetters('HELLO WoRLD'))

// let a = 3
// let b = (a * (a + 1))+ 1
// let c =0;
// for(let i=1; i<=a;i++)
//   c= c +i;
// c = 1 + 2*c;
// console.log(b,c)

// function sumNumber(num) {
//   let arr = Array.from(String(num));
//   console.log( parseInt(arr[0]) * parseInt(arr[1]) * parseInt(arr[2]))
// }
// sumNumber(459)

// function typeOfTriangle (a,b,c) {
//  if (a === b && b === c) {
//    return 1;
//  }
//  else if (a === b || a === c || b === c) {
//    return 2;
//  }
//  else {
//    return 3;
//  }
//
// }
//
// console.log(typeOfTriangle(5,5,4))