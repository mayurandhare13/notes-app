const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "your notes..."
}


const addNotes = (title, body) => {
    notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)
    
    /* !undefined === true  or  duplicateNote === undefined */
    if(!duplicateNote) {    
        notes.push(
            {
                title: title,
                body: body
            }
        )
        saveNotes(notes)

        console.log(chalk.green.inverse('new note added'))
    }
    else
        console.log(chalk.red.inverse('note title taken!'))

}

// const removeNote = function(title){
const removeNote = (title) => {
    notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse.bold("Note Deleted!"))
    }
    else
        console.log(chalk.red.inverse.bold("No Note Found!"))

}

const listNotes = () => {
    console.log(chalk.inverse.bold("Your Notes"))
    notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}


const readNote = (title) => {
    console.log("searching for %s", title)
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if(note) {
        console.log(chalk.inverse.blue(note.title))
        console.log(note.body)
    }
    else
        console.log(chalk.inverse.red("Note not found!"))
}


const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json')
        const notesData = notesBuffer.toString()
        return JSON.parse(notesData)
    } catch (exc) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}