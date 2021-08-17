# mongodb-express-rest-api-example

Example for the article on MongoDB and Express JS web REST API tutorial.

## How To Run

1. You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide, to learn how to create a free Atlas account, create your first cluster and get your Connection String to the database. 
Then, set the Atlas URI connection parameter in `server/config.env` to your Connection String:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

2. Start the Express server:
```
cd server
npm install
npm start
```

3. Start the React app:
```
cd app/listings/
npm install
npm start
```

## Disclaimer

Use at your own risk; not a supported MongoDB product
