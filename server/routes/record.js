const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/listings").get(async function (req, res) {
  let db_connect = dbo.getDb("sample_airbnb");
  console.log(req.body.id);
  db_connect
    .collection("listingsAndReviews")
    .find({}).limit(50)
    .toArray(function (err, result) {
      if (err)  { res.status(400); 
                  res.send("Error fetching lisings!"); }
      else
      {
        
        res.json(result);
      }
    });
});

// This section will help you create a new record.
recordRoutes.route("/listings/recordSwipe").post(function (req, res) {
  let db_connect = dbo.getDb("sample_airbnb");
  let myobj = {
   listing_id : req.body.id,
   last_modified : new Date(),
   session_id : req.body.session_id,
   direction : req.body.direction
  };
  db_connect.collection("matches").insertOne(myobj, function (err, res) {
    if (err)  { res.status(400); 
      res.send("Error insert matches!"); }
  });
});

// This section will help you update a record by id.
recordRoutes.route("/listings/updateLike").post(function (req, res) {
  let db_connect = dbo.getDb("sample_airbnb");
  let myquery = { _id: req.body.id };
  let newvalues = {
    $inc: {
      likes : 1
    }
  };
  db_connect
    .collection("listingsAndReviews")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err)  { res.status(400); 
        res.send("Error insert matches!"); }
    else
    {
      console.log("1 document updated");
    }
    });
});

// This section will help you delete a record
recordRoutes.route("/listings/delete").delete((req, res) => {
  let db_connect = dbo.getDb("sample_airbnb");
  var myquery = { listing_id: req.body.id };
  db_connect.collection("matches").deleteOne(myquery, function (err, obj) {
  if (err)  { res.status(400); 
      res.send("Error insert matches!"); }
  else
  {
    console.log("1 document deleted");
  }
  });
});

module.exports = recordRoutes;
