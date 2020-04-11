const fs = require('fs');
const chalk = require('chalk');
function getNotes(){
return "Your notes..."
}

const addNote = function (title, body){

    const notes = loadNotes();
    const duplicateNotes = notes.filter(note=> note.title===title);
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        
        saveNotes(notes);
        console.log("Note created!!");
    }else{
        console.log("Note title taken!");
    }
  
}
const removeNote = function (title){

    const notes = loadNotes();
    const notesToKeep = notes.filter(note=> note.title!=title);
    if((notes.length>notesToKeep.length)){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse("Note removed!!"));
    }else{
        console.log(chalk.red.inverse("No note found!"));
    }
  
}
const saveNotes = notes =>{
    fs.writeFileSync("notes.json",JSON.stringify(notes));
}
const loadNotes= ()=>{
    try{
       const data = fs.readFileSync("notes.json").toString();
       return JSON.parse(data);
     }catch(e){
         return [];
     }
}
module.exports= {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}