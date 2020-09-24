const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderTeam } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/team", renderTeam);

module.exports = router;
