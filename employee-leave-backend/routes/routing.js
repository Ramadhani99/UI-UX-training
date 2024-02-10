const express = require("express");
const routing = express.Router();
const leave = require("../service/leaves");

//---------------------------------------------------------------------------------------

//retreive all movies
routing.get("/getLeaves", (req, res) => {
  result = leave.retrieveLeaves();
  res.json(result);
});

//retrieve particular movie
routing.get("/getLeaves/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  result = leave.retrieveLeaveDetail(id);
  if (result) res.json(result);
  else res.json("No details found!!");
});

//post method
routing.post("/leave", (req, res) => {
  let LEAVE = JSON.stringify(req.body);
  result = leave.addLeave(LEAVE);
  if (result) res.json("successfully added the leave");
  else res.json("Error!!");
});

//Delete
//moviename - to be deleted
routing.delete("/leave/:id", (req, res) => {
  let id = req.params.id;
  result = leave.deleteLeaveDetail(id);
  if (result) res.json("successfully deleted the leave");
  else res.json("Error!!");
});

//moviename to be updated , movie - key,value pair to be updated.
routing.put("/leave/:id/:key/:value", (req, res) => {
  id = req.params.id;
  key = req.params.key;
  value = req.params.value;
  result = leave.updateLeaveDetails(id, key, value);
  if (result) res.json("successfully updated the leave");
  else res.json("Error!!");
});

module.exports = routing;
