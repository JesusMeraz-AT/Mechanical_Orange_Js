const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.renderNoteForm = (req, res) =>{
    res.render("notes/new-note")
};

notesCtrl.createNewNote = async (req,res) => {
    const { title , description} = req.body;
    const newNote = Note({title, description})

    console.log(newNote)
    await newNote.save();
    res.send('new note')
}; 

notesCtrl.renderNotes = async (req,res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form')
};

notesCtrl.updateNote = (req,res) => {
    res.send('update note')
};

notesCtrl.deleteNote = (req,res) => {
    res.send('deleating note')
};

module.exports = notesCtrl; 