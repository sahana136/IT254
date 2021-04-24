const express = require('express');

const router = express.Router();

const usersControllers = require('../controllers/branch-controller');

router.get('/:branchid', usersControllers.getBranchByID);

router.get('/:branchid/:fileid', usersControllers.getFileByID);

//router.post('/', branchController.createBranch);

//router.patch('/:uid', usersControllers.updateUser);

//router.delete('/:uid', usersControllers.deleteUser);

module.exports = router;