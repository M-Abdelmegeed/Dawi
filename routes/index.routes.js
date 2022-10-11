const express = require("express");
const testConnection = require("../controllers/test");
const router = express.Router();

router.post("/lala", testConnection);

module.exports=router;