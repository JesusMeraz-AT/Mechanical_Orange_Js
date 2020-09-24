const indexcontroller = {};

indexcontroller.renderIndex = (req, res) => {
    res.render("index");
};

indexcontroller.renderAbout = (req, res) => {
    res.render("about");
};

module.exports = indexcontroller;