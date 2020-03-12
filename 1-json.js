
const fs = require('fs')

/*
const book = {
    title: '1984',
    author: 'George Orwell'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)
*/

const dataBuffer = fs.readFileSync('./1-json.json')
console.log(dataBuffer)

const dataJSON = dataBuffer.toString()
console.log(dataJSON)

const data = JSON.parse(dataJSON)
console.log(data.title)
