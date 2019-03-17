const notes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'delete a note',
    handler: function() {
        console.log('deleting a note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log('All notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: notes.getNotes()
})

yargs.parse()