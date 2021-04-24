const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users-routes');
const branchRoutes = require('./routes/branch-routes');

const HttpError = require('./models/http-error');

const app = express();

//We add this middleware so that the body is parsed
//first before reaching the usersRoutes middleware
//since we first parse the body and then reach the 
//required middleware

//That's why this is placed first

//We expect to have data in the body of requests

//json() will extract the json data in form of 
//javascript data structures like
//objects or arrays, call the next() 
//function so the next middleware in line will be 
//reached, and add the json data there
app.use(bodyParser.json());

//app.use('/users/details',usersRoutes);
//Going to a specific branch
app.use('/',branchRoutes);

//Only runs if we didn't send a response in any of our
//routes above this
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

//Will be applied on every incoming request.
//Since it has 4 parameters, express will treat this as
//a special middleware function.
app.use((error, req, res, next) => {
    //if a response has already been sent
    if(res.headerSent) {
        return next(error);
    }
    //default 500 code indicates something went
    //wrong on the server
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);