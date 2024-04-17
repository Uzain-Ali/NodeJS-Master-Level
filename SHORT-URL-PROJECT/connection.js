const mongoose = require("mongoose");
async function connectMongDb(url){
    return mongoose.connect(url);
};

module.exports = {
    connectMongDb
}