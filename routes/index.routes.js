const express = require("express");
const registerUser = require("../controllers/registerUser");
const {testConnection} = require("../controllers/test");
const {userLogin} = require("../controllers/userLogin");
const {authenticateToken}=require("../controllers/userLogin");
const {getPosts} = require("../controllers/test");
const userLogout = require("../controllers/userLogout");
const router = express.Router();

router.post("/lala", testConnection);
router.post("/registration", registerUser);
router.post("/login", userLogin);
router.post("/posts",authenticateToken,getPosts);
router.delete("/logout", userLogout);

module.exports=router;