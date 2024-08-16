const express = require("express")
const router = express.Router()


const register = require("../controllers/user/register")
const login = require("../controllers/user/login")
const getUserData = require("../controllers/user/getUserData")
const logout = require("../controllers/user/logout")
const addTodo = require("../controllers/user/addTodo")
const getTodo = require("../controllers/user/getTodo")
const markTodo = require("../controllers/user/marktodo")
const getAnnouncements=require('../controllers/admin/getAnnouncements')

router.post('/register', register)
router.post('/login', login);
router.get('/getuserdata',getUserData )
router.get('/logout',logout )
router.post('/addtodo',addTodo)
router.get('/gettodo',getTodo)
router.get('/markTodo',markTodo)
router.get('/announcements',getAnnouncements)


module.exports = router
