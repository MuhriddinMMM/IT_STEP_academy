// Написать функцию, которая принимает в аргумент массив и возвращает новый массив в котором элементы находятся в обратном порядке

// reverseArr([1,2,3]) -> [3,2,1]

// Написать функцию, которая возвращает строку в формате rgb(red, green, blue), где red, green и blue - значения от 0 до 255 включительно

// generateRGBString() -> rgb(0, 222, 34)
// generateRGBString() -> rgb(99, 255, 88)

// Написать программу, которая посчитает количество слов в файле, а также выведет массив с длиной каждого слова



// fs.readFile('text.txt', 'utf8', (err, data) => {
//     if(err) throw err
//     console.log(data.replace(/[^\w\s]/gi, ''))
// })


// function generateRGBString() {
//     const generateNumsInRange = range => Math.round(Math.random() * range)

//     return `rgb(${generateNumsInRange(255)}, ${generateNumsInRange(255)}, ${generateNumsInRange(255)})`

// }
// const rgbString = generateRGBString()
// console.log(rgbString)


// const fs = require('fs')

// function countWordsAndCountLengthOfWord(file){
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) throw err
//         const words = data.split(/[\s\.\,\?\!\:\;\'\"\-]+/)
//         console.log(words.length)
//         console.log(words.map((word) => word.length))
//     })
// }

// countWordsAndCountLengthOfWord('text.txt')










