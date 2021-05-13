function numberOfLetters(word) {
    let finalVowels = []
  const arrayFromWord = Array.from(word)
  for (let i = 0; i < arrayFromWord.length; i++) {
      if (arrayFromWord[i] === 'a') {
       finalVowels.push(arrayFromWord[i] + 'a')
      }
        if (arrayFromWord[i] === 'e') {
            finalVowels.push(arrayFromWord[i] + 'e')
        }
        if (arrayFromWord[i] === 'i') {
            finalVowels.push(arrayFromWord[i] + 'i')
        }
        if (arrayFromWord[i] === 'o') {
            finalVowels.push(arrayFromWord[i] + 'o')
        }
        if (arrayFromWord[i] === 'u') {
            finalVowels.push(arrayFromWord[i] + 'u')
        }
        if (arrayFromWord[i] === 'y') {
            finalVowels.push(arrayFromWord[i] + 'y')
        }
    }
    return finalVowels
}
console.log(numberOfLetters('welcome to python'))