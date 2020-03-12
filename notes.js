const fs = require('fs')
const chalk = require('chalk')

/*
const getNotes = function () {
    return ('Your notes..')
}
*/

const getNotes = () => {
    return 'Your notes..'
}


/*
const addNote = function (title, body) {
    const notes = loadNotes()
    const dupliateNotes = notes.filter(function (note) {
        //return false
        return note.title === title
    })
    
    if (dupliateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        console.log('New note added!')
    } else {
        console.log('Duplicate notes')
    }
    console.log(notes)

    //console.log(notes)
    saveNotes(notes)
}
*/

const addNote =  (title, body) => {
    const notes = loadNotes()
    const dupliateNotes = notes.filter((note) => note.title === title)
        //return false
    const duplicateNote = notes.find((note) => note.title === title)
    
    //DEBUG
    debugger

    //node inspect 'filename.js'
    //para usar el debug
    //abrir chrome://inspect/#devices

    //if (dupliateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        console.log('New note added!')
    } else {
        console.log('Duplicate notes')
    }
    console.log(notes)

    //console.log(notes)
    saveNotes(notes)
}

/*
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
*/
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (error) {
        console.log('Empty file')
        return []
    }
}

/*
const removeNotes = function (title) {
    console.log('remove notes')
    console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

}
*/

const removeNotes = (title) => {
    console.log('remove notes')
    console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
        //return note.title !== title

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

}

const listNotes = () => {
    console.log(chalk.blue.inverse('Your notes:'))
    const list = loadNotes()
    list.forEach(element => {
        console.log(chalk.blue(element.title))
        console.log(chalk.green(element.body))
    })
}

const readNotes = (title) => {
    console.log(chalk.gray.inverse(title))
    const notes = loadNotes()
    /*
    const noteToRead = (notes.filter((note) => {
        if (note.title === title) {
            console.log(chalk.blueBright(note.body))
        }
    }))
    */
   const note = notes.find((note) => note.title === title)
   if (note) {
        console.log(chalk.inverse(note.body))
   } else {
        console.log(chalk.red.inverse('Note not found'))
   }
}




module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}