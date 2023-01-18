import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
  process.exit();
}

let db = conn.db("sample_airbnb");

export default db;