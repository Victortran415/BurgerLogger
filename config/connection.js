const mysql = require("mysql");




const connection = mysql.createConnection({
    host: "lfmerukkeiac5y5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "c6txk884y2kazpg3",
    password: "jtdhgfb9aal1pizs",
    database: "lpv5pcjpbqj92iyp",
});

connection.connect((err) => {
    if (err){
        console.error(`Error Connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID ${connection.threadId}`)
})

module.exports = connection;