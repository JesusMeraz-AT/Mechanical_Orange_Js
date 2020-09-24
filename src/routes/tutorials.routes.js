const { Router } =require("express");

const router = Router();

const { renderTutorialForm, createNewTutorial, renderTutorials, renderEditForm, updateTuto, deleteTuto } =  require("../controllers/tutorials.controllers");

// New tutorials
router.get("/tutorials/add", renderTutorialForm)

router.post("/tutorials/new-tuto", createNewTutorial)

// Get all tutorials
router.get("/tutorials", renderTutorials)

// Edit tutorials
router.get("/tutorials/edit/:id", renderEditForm)

router.put("/tutorials/edit/:id", updateTuto)

// Delete tutorials
router.delete("/tutorials/edit/:id", deleteTuto)

module.exports = router;