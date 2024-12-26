const express = require("express");
const router = express.Router();
const ProductController = require("../controller/controller");


//UNIVERSALL POST
//router.post("/send-id", ProductController.getPageId);


//POST
router.post("/productlist/add", ProductController.createElement);
router.post("/clientlist/add", ProductController.createElement);
router.post("/transcationlist/add", ProductController.createElement);

//GET
router.get("/productlist", ProductController.getAllElements);
router.get("/clientlist", ProductController.getAllElements);
router.get("/transcationlist", ProductController.getAllElements);

//DELETE
router.delete("/productlist/:id", ProductController.deleteElement);
router.delete("/clientlist/:id", ProductController.deleteElement);


module.exports = router;
