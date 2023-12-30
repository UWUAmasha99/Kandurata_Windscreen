const mongoose  = require("mongoose");

const notesSchema = {
    VehicalCode: String,
    Quantity: String,
    ContactNum: String,
    Address: String,
    Service:String
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;