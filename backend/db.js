const mongoose = require("mongoose");
const connectDatabase = () => {
   mongoose.connect("mongodb+srv://siddhantsahu503:kPx6uB837PIjIgVZ@cluster0.jeu8ote.mongodb.net/iNotebook?retryWrites=true&w=majority")
   .then(() => console.log("connected to the database"))
   .catch((err) => console.log(err))  
};

module.exports = connectDatabase;
