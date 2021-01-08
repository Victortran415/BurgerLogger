const mysql = require("mysql");
const { connect } = require("../controllers/burgers_controller");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "burgerDB",
});

connection.connect((err) => {
    if (err){
        console.error(`Error Connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID ${connection.threadId}`)
})

module.exports = connection;