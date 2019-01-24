// express is server framework built on node, makes it easy to listen to http requests.
const express = require('express');

// bodyParser is a package that puts the request's body on the req.body object.
const { json } = require('body-parser');

// app is express invoked. The .get .post .put .patch .delete .listen methods can be accessed from app.
const app = express();

app.use(json());

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));


// What is nodejs? 
// JavaScript runtime built on Chrome's V8 JavaScript engine.


// What are parameters and how do we access them? 
// It is the value on the API URL that specifies certain info - i.e. an ID. It is defined when you make the endpoint and there must be a present endpoint to match it. We access them off of req.params


// What is a query and how do we access it?
// It is a optional request that is passed in and defined on the front end when making an API call. It matches a given endpoint without the query and doesn't exist unless called. We access it off of the req.query

// What is a request body and how do we access it?
// It is the object containing the data we need to complete a POST or PUT request that is passed in when making the API call. It cannot be used in GET requests.

app.get('/api/test', (req, res) => {
  if(req.query.test) {
    res.status(200).json("This is a query")
  }
  res.status(200).json('This is a get request');
})




