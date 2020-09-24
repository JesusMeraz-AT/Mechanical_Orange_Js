//SERVIDOR WEB BÁSICO CON EXPRESS
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");


//Initializations
const app = express();

// Settings -- lo que quiero que haga express basado en módulos
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "default",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Middleware --funciones ejecutadas a medida que van llegando peticiones
app.use(morgan("dev")); //permite ver las peticiones
app.use(express.urlencoded({extended:false})); //convertir datos en formularios a formato .JSON
// Global variables

// Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/tutorials.routes"));


// Static files
app.use(express.static(path.join(__dirname, "public")));


module.exports = app;
