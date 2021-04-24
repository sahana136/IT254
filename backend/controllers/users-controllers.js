//Edit Profile
const HttpError = require('../models/http-error');

const { v4: uuidv4 } = require('uuid');

let DUMMY_USERS = [
    {
        id: "u1",
        name: "harshitha",
        branch: "it",
        year: 2
    },
    {
        id: "u2",
        name: "sahana",
        branch: "cse",
        year: 2
    },
    {
        id: "u3",
        name: "divyanshu",
        branch: "me",
        year: 2
    },
    {
        id: "u4",
        name: "vijay",
        branch: "ece",
        year: 2
    }
];

const getUserByID = (req, res, next) => {
    const userid = req.params.uid;
    const user = DUMMY_USERS.find((u) => {
        return u.id === userid;
    });
    if(!user) {
        //Error
        return next(new HttpError('Could not find a user for the provided ID', 404));
    }
    console.log('GET request in USERS');
    res.json({user: user});
}

const createUser = (req, res, next) => {
    //const name = req.body.name
    const {name, branch, year} = req.body;
    const createdUser = {
        id: uuidv4(),
        name: name,
        branch: branch,
        year: year
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
}

const updateUser = (req, res, next) => {
    const {name, branch, year} = req.body;
    const userId = req.params.uid;

    //Creating a copy of the user object to make changes to
    const updatedUser = {...DUMMY_USERS.find(u => u.id === userId)};
    const userIndex = DUMMY_USERS.findIndex(u => u.id === userId);
    //Making changes to copy
    updatedUser.name = name;
    updatedUser.branch = branch;
    updatedUser.year = year;
    //Updating array with copy
    DUMMY_USERS[userIndex] = updatedUser;

    res.status(201).json({user: updatedUser});
};

const deleteUser = (req, res, next) => {
    const userId = req.params.uid;
    //return true of ids do not match
    //false if ids match
    //if returned value is false, it is removed (filtered)
    //from DUMMY_USERS
    DUMMY_USERS = DUMMY_USERS.filter(u => u.id!=userId);
    res.status(200).json({message: 'Deleted user.'});

};

//used to export multiple functions
//exports a pointer to function (pointer is the one after =)
exports.getUserByID = getUserByID;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;