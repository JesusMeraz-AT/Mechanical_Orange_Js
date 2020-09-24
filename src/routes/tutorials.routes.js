const express = require("express");
const router = express.Router();

// Controller
const {
  renderTutorialForm,
  createNewTutorial,
  renderTutorials,
  renderEditForm,
  updateTutorial,
  deleteTutorial
} = require("../controllers/tutorials.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Tutorial
router.get("/tutorials/add", isAuthenticated, renderTutorialForm);

router.post("/tutorials/new-tutorial", isAuthenticated, createNewTutorial);

// Get All Tutorials
router.get("/tutorials", isAuthenticated, renderTutorials);

// Edit Tutorials
router.get("/tutorials/edit/:id", isAuthenticated, renderEditForm);

router.put("/tutorials/edit-tutorial/:id", isAuthenticated, updateTutorial);

// Delete Tutorials
router.delete("/tutorials/delete/:id", isAuthenticated, deleteTutorial);

module.exports = router;
