const express = require('express')
const router = express.Router()

const {
    register,
    login, 
    getUserInfo,
    updateUser,
    getAllUsers,
    updateLearnScore,
    updateScore,
    checkPrivileges
} = require('../controllers/users.js')

//Overarching User Routes (NOTE: Each / should be preceded by /users when testing with Postman e.g. localhost:5000/users/register)

router.post('/register', register)

router.post('/login', login)

router.post('/userInfo', getUserInfo)

router.put('/update/:id', updateUser)

router.post('/allUsers', getAllUsers)

router.put('/updatelearnscore', updateLearnScore);

router.put('/updatescore', updateScore)

router.post('/checkPrivileges', checkPrivileges)

module.exports = router