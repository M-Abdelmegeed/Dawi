const express = require("express");
const registerUser = require("../controllers/registerUser");
const testConnection = require("../controllers/test");
const router = express.Router();

router.post("/lala", testConnection);
router.post("/registration", registerUser);

module.exports=router;