//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'Hola perro')

//fs.appendFileSync('notes.txt', ' Jalale perrooooo')

const utils = require('./utils.js')
const getNotes = require('./notes.js')

const name = 'Daniel'
const add = utils(1,8)
const notes = getNotes()

//console.log(name)
//console.log(utils)
//console.log(add)
//console.log(getNotes)
//console.log(notes)

const validator = require('validator')

//console.log(validator.isEmail('example.com'))
console.log(validator.isURL('example.com'))

const  chalk = require('chalk')
console.log(chalk.green('Success!!'))

console.log(chalk.blue.bgGrey(validator.isURL('example.com')))

/*
console.log(process.argv)
console.log(process.argv[2])

const command = process.argv[2]
if (command === 'add') {
    console.log('Jalale perrooooo')
} else if (command === 'remove') {
    console.log('Removing note!!')
}
*/

const yargs = require('yargs')
yargs.version('1.0.1')


//APP

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note...')
    }
})

//Create a list command

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: function () {
        console.log('Listing a note...')
    }
})

//Create a read command

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading a note...')
    }
})

// add, remove, read, list

console.log(yargs.argv)