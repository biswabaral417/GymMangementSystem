const express = require("express")
const router = express.Router()


const login = require("../controllers/user/login")
const logout = require("../controllers/user/logout");
const getAnnouncements = require("../controllers/admin/getAnnouncements");
const addAnnouncements = require("../controllers/admin/addAnnouncements");


router.post('/login', login);
router.get('/logout',logout );
router.get('/getannouncements',getAnnouncements);
router.post('/addannouncements',addAnnouncements);

module.exports = router


