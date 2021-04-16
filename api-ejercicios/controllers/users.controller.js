const _pg = require("../services/postgres.service");

const getUsers = (req, res) =>{
    
    return res.send("Usuarios");
};

module.exports = { getUsers };