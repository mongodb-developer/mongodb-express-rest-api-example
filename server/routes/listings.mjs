import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (_req, res) => {
  let collection = await db.collection('listingsAndReviews');
  let results = await collection.find({})
    .limit(50)
    .toArray()
    .catch(e => res.status(400).send("Error fetching listings"));
    
  res.send(results).status(200);
});

// This section will help you create a new record.
router.post('/match', async (req, res) => {
  let collection = await db.collection("listingsAndReviews");
  
  // Best practice would be to let MongoDB generate an ObjectID
  let maxId = await collection.aggregate([
    {
      '$sort': {
        '_id': 1
      }
    }, {
      '$limit': 1
    }, {
      '$project': {
        '_id': 1
      }
    }
  ]).toArray();
  let newId = (parseInt(maxId[0]._id) + 1).toString();
  let newDocument = req.body;
  newDocument._id = newId;

  try {
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch(e) {
    console.log(e);
    res.send("Error inserting document").status(400);
  }
});

// This section will help you update a record by id.
router.patch('/like/:id', async (req, res) => {
  const listingQuery = { _id: req.params.id };
  const updates = {
    $inc: {
      likes: 1,
    }
  };

  let collection = await db.collection("listingsAndReviews");
  let result = await collection.updateOne(listingQuery, updates);
  
  res.send(result).status(200);
});

// This section will help you delete a record.
router.delete('/:id', async (req, res) => {
  const listingQuery = { _id: req.params.id };

  const collection = db.collection("listingsAndReviews");
  let result = await collection.deleteOne(listingQuery);
  
  res.send(result).status(200);
});

export default router;
