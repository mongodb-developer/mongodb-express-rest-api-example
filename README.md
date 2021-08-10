# mongodb-express-rest-api-example
Example for the article on MongoDB and Express JS web REST API tutorial

## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Start Express server:
```
cd server
npm install
npm install -g nodemon
nodemon server
```

Start Web server
```
cd app/listings/
npm install
npm start
```

## Disclaimer

Use at your own risk; not a supported MongoDB product
