const express = require ("express"); // Es un Framework de servidor
const exphbs = require ("express-handlebars"); // Crea vistas HTML
const path = require("path");
const morgan = require('morgan');


// Initializations

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views")) // El uso de path.join permite accedera esta carpeta desde cualquier OS
app.engine(".hbs", exphbs({
    defaultLayout: "main", 
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
}));

app.set("view engine", ".hbs");

//Middlewares 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Global Variables


//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;