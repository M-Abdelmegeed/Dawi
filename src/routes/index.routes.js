const express = require("express");
const registerUser = require("../controllers/registerUser");
const {testConnection} = require("../controllers/test");
const {userLogin} = require("../controllers/userLogin");
const {authenticateToken}=require("../controllers/userLogin");
const {getPosts} = require("../controllers/test");
// const userLogout = require("../controllers/userLogout");
const addMedicine = require("../controllers/addMedicine");
const getMedicine = require("../controllers/getMedicine");
const deleteMedicine = require("../controllers/deleteMedicine");
const editMedicine = require("../controllers/editMedicine");
const makeReservation = require("../controllers/addReservation");
const getReservation = require("../controllers/getReservation");
const deleteReservation = require("../controllers/deleteReservation");
const editReservation = require("../controllers/editReservation");
const addMedicine2 = require("../controllers/addMedicine2");
const router = express.Router();


router.get("/",(req,res)=>{
res.send("E7geli Server")
});
router.post("/lala", testConnection);
router.post("/registration", registerUser);
router.post("/login", userLogin);
router.post("/posts",authenticateToken,getPosts);
// router.delete("/logout", userLogout);
router.post("/add-medicine",authenticateToken,addMedicine);
router.post("/add-medicine-2", authenticateToken, addMedicine2);
router.post("/get-medicines", authenticateToken,getMedicine);
router.post("/delete-medicine", authenticateToken,deleteMedicine);
router.post("/edit-medicine", authenticateToken, editMedicine);
router.post("/add-reservation", makeReservation);
router.post("/get-reservations", authenticateToken, getReservation);
router.post("/delete-reservation", authenticateToken, deleteReservation);
router.post("/edit-reservation", authenticateToken ,editReservation);

module.exports=router;