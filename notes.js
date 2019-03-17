const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "your notes..."
}

const addNotes = function(title, body){
    notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0) {
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

const removeNote = function(title){
    notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title != title
    })

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse.bold("Note Deleted!"))
    }
    else
        console.log(chalk.red.inverse.bold("No Note Found!"))

}

const saveNotes = function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function() {
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
    removeNote: removeNote
}