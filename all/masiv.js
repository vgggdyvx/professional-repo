// const cars = ['Mercedes', 'Audi', 'BMW']
// const people = [
//   {name: 'Egor', budget: 4200},
//   {name: 'Nikita', budget: 420},
//   {name: 'Leha', budget: 15}
// ]
//  const fib = [1, 1, 2, 3, 4, 5, 8, 13]

// console.log(cars)
//  cars.push('Porsche')
// console.log(cars)
//
// cars.unshift('volvo')
// console.log(cars)
//
// const firstItem = cars.shift()
// console.log(firstItem)
// console.log(cars)
//
// cars.pop ()
// console.log(cars)
//

// const index = cars.indexOf('Audi')
// cars[index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
// //   console.log(person)
//   if (person.budget === 15) {
//     findedPerson = person
//   }
// }
//
// console.log(findedPerson)

// const person = people.find (person =>person.budget === 420)
// console.log(person)

// cars[cars.indexOf('Audi')] = 'Porsche'
// console.log(cars)
// const index = people.findIndex( function (person) {
//  return person.budget > 5
// })
// console.log(people[index])
//
// function add(first, second) {
//   return first + second
// }
//
// add(12, 22)

// console.log(cars.includes('Audi'))

// const upperCaseCars = cars.map(car=>{
//   return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(filteredNumbers)

// const people = [
//   {name: 'Egor', budget: 4200},
//   {name: 'Nikita', budget: 420},
//   {name: 'Leha', budget: 15}
// ]
//  const allBudget = people.filter(person => person.budget > 2000)
//    .reduce((acc, person) => {
//      acc += person.budget
//   return acc
// }, 0)
//
// console.log(allBudget)