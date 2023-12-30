const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  text: {
    VehicalCode: String,
    Quantity: String,
    ContactNum: String,
    Address: String,
    Service:String
  },
});

// const notesSchema = {
//     title: String,
//     content: String
// }

module.exports = mongoose.model("note", notesSchema);