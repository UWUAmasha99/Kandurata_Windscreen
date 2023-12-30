const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");
const Todo = require("../models/Todo");

router.route("/create").post((req, res) => {
    const VehicalCode = req.body.VehicalCode;
    const Quantity = req.body.Quantity;
    const ContactNum = req.body.ContactNum;
    const Address = req.body.Address;
    const Service = req.body.Service;
    const newNote = new Note({
        VehicalCode, 
        Quantity,
        ContactNum,
        Address,
        Service
    });

    newNote.save();
})

router.route("/displayOrder").get((req, res) => {
    Todo.find((err, todos) => {
        if (err) {
          console.log(err);
        } else {
          res.json(todos);
        }
      });

})
module.exports = router;

