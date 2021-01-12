const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let router = require("./controllers/burgers_controller.js");
app.use(router)

 
app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));