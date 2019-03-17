const fs = require('fs')

const getNotes = function(){
    return "your notes..."
}

const addNotes = function(title, body){
    notes = loadNotes()
    notes.push(
        {
            title: title,
            body: body
        }
    )
    saveNotes(notes)
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
    addNotes: addNotes
}