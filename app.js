const yargs = require('yargs');
const notes= require('./notes');
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body);
    }
});
yargs.command({
    command:'remove',
    describe:'remove a new note',
    handler:()=>{
        console.log("removing a new note")
    }
});
yargs.command({
    command:'read',
    describe:'read a note',
    handler:()=>{
        console.log("Reading a new note")
    }
});
yargs.command({
    command:'list',
    describe:'list a new note',
    handler:()=>{
        console.log("Listing a new note")
    }
});
yargs.parse();
//console.log(yargs.argv);
