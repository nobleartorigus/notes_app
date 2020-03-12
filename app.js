//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'Hola perro')

//fs.appendFileSync('notes.txt', ' Jalale perrooooo')

const utils = require('./utils.js')
//const getNotes = require('./notes.js')

const name = 'Daniel'
const add = utils(1,8)
//const notes = getNotes()

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
const notes = require('./notes.js')
yargs.version('1.0.1')


//APP

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            //demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Adding a new note', argv)
        //console.log('Title: ' + argv.title)
        //console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            //demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        //console.log('Removing a note...')
        notes.removeNotes(argv.title)
    }
})

//Create a list command

yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: function (argv) {
        //console.log('Listing a note...')
        notes.listNotes()
    }
})

//Create a read command

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Reading a note...')
        notes.readNotes(argv.title)
    }
})

// add, remove, read, list

//console.log(yargs.argv)
yargs.parse()