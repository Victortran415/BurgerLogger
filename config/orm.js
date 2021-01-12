const connection = require("./connection");

const orm  = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput}`;
        console.log(queryString);
        connection.query(queryString, [tableInput], (err, res) => {
            if (err) {
                throw err;
            }; 
            cb(res)
        })
    },
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals}')`;

        console.log(queryString);
        connection.query(queryString, vals, (err, res) => {
            if (err) {
                throw err;
            };    
            cb(res)
        })
    },
    
    updateOne(table, condition, cb) {
        let queryString = `UPDATE ${table} SET devoured = 1 WHERE ${condition};`;
        console.log(queryString);
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
}

module.exports = orm;