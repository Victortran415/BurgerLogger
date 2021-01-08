const orm = require("../config/orm.js");

const burgerJS = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res))
    }

    
}

module.exports = burgerJS;