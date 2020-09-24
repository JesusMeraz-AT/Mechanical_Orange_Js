const tutorialscontrollers = {};

const Tutorial = require("../models/Tutorial")

tutorialscontrollers.renderTutorialForm = (req, res) => {
    res.render("tutorials/new-tuto");
};

tutorialscontrollers.createNewTutorial = async (req, res) => {
    const {title, url, description} = req.body;
    const newTutorial = new Tutorial({title , url , description});
    await newTutorial.save();
};

tutorialscontrollers.renderTutorials = (req, res) => {
    res.send("showing all tutorials");
};

tutorialscontrollers.renderEditForm = (req, res) => {
    res.send("render edit form");
};

tutorialscontrollers.updateTuto = (req, res) => {
    res.send("update tutorial");
};

tutorialscontrollers.deleteTuto = (req, res) => {
    res.send("deleting tutorial");
};
module.exports = tutorialscontrollers;
