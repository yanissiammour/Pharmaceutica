const ProductModel = require("../model/model");

//get All Table Ellements

const getAllElements = (req, res) => {
	 const pageID = +req.query.tab;
	 console.log("CONTROLER pageID values:",pageID);
	ProductModel.getAllElements(pageID,(err,data)=>{
		if(err) return res.status(500).json(err)
		return res.json(data);
	});
}

// Create a new Elements

const createElement = (req, res) => {
	const pageID = +req.query.tab;
	const ElementData = req.body;
	console.log("CONTROLER Insert values:", ElementData);
	ProductModel.createElement(pageID,ElementData,(err,data)=>{
		if(err) return res.status(500).json(err);
		return res.json(data);
	});
}


// Delete a Elements

const deleteElement = (req,res) =>{
	const pageID = +req.query.tab;
	const ElementId = req.params.id;
	ProductModel.deleteElement(pageID,ElementId,(err,data)=>{
		if(err) return res.status(500).json(err);
		return res.json(data);
	});
}

module.exports = {
    getAllElements,
    createElement,
    deleteElement
};