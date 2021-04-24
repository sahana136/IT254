//Edit Profile
const HttpError = require("../models/http-error");

const { v4: uuidv4 } = require("uuid");

let USERS = [
  {
    branchid: "b1",
    branch: "IT",
  },
  {
    branchid: "b2",
    branch: "CSE",
  },
  {
    branchid: "b3",
    branch: "EEE",
  },
  {
    branchid: "b4",
    branch: "ECE",
  },
  {
    branchid: "b5",
    branch: "MN",
  },
  {
    branchid: "b6",
    branch: "CH",
  },
];

let FILES = [
  {
    fileid: "f1",
    name: "IT254-MidSem QP",
    branch: "IT",
    branchid: "b1",
    image: "https://cutt.ly/DxzQBdK",
  },
  {
    fileid: "f2",
    name: "IT251 Assignment-2",
    branch: "IT",
    branchid: "b1",
    image: "https://cutt.ly/lxzlrta",
  },
  {
    fileid: "f3",
    name: "IT250 Lecture-3",
    branch: "IT",
    branchid: "b1",
    image: "https://cutt.ly/Mxzl4BD",
  },
  {
    fileid: "f4",
    name: "IT200 EndSem QP",
    branch: "IT",
    branchid: "b1",
    image: "https://cutt.ly/DxzQBdK",
  },
  {
    fileid: "f5",
    name: "IT254 NodeJS Lecture",
    branch: "IT",
    branchid: "b1",
    image: "https://cutt.ly/Mxzl4BD",
  },
  {
    fileid: "f6",
    name: "CS292 Assignment-3",
    branch: "CS",
    branchid: "b2",
    image: "https://cutt.ly/lxzlrta",
  },
];

const getBranchByID = (req, res, next) => {
  const branchid = req.params.branchid;
  const branch = USERS.find((u) => {
    return u.branchid === branchid;
  });
  if (!branch) {
    //Error
    return next(
      new HttpError("Could not find a branch for the provided ID", 404)
    );
  }
  console.log("GET request in BRANCHES");
  res.json({ branch: branch });
};

const getFileByID = (req, res, next) => {
    const file_id = req.params.fileid;
    const branchid = req.params.branchid;
    const fname = FILES.find((u) => {
        //FILES = FILES.filter(u => u.branchid === branchid);
        if(branchid === u.branchid)
            return u.fileid === file_id;
    });
    if (!fname) {
      //Error
      return next(
        new HttpError("Could not find a file for the provided ID", 404)
      );
    }
    console.log("GET request in FILES");
    res.json({ file_details: fname });
  };

// const createBranch = (req, res, next) => {
//   //const name = req.body.name
//   const { branch } = req.body;
//   const createdBranch = {
//     branchid: uuidv4(),
//     branch: branch,
//   };

//   USERS.push(createdBranch);

//   res.status(201).json({ branch: createdBranch });
// };

//used to export multiple functions
//exports a pointer to function (pointer is the one after =)
exports.getBranchByID = getBranchByID;
//exports.createBranch = createBranch;
exports.getFileByID = getFileByID;
