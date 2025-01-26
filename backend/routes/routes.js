const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller");


//UNIVERSALL POST
//router.post("/send-id", ProductController.getPageId);


//POST
router.post("/AddingElement/add", Controller.createElement);


//GET
router.get("/GetAllElements", Controller.getAllElements);


//DELETE
/*pour les delete c'est pas fini*/
router.delete("/productlist/:id", Controller.deleteElement);
router.delete("/clientlist/:id", Controller.deleteElement);


module.exports = router;
