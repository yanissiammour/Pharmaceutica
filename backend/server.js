const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"pharmaceutica"
})

/************gestion INVENTER*************/
app.get("/inventaire",(req,res)=>{
	const sql_query = "SELECT * FROM produit"
	db.query(sql_query,(err,data)=>{
		if(err) return res.json(err);
		return res.json(data);
	})
})


app.post('/add',(req,res)=>{
	const sql_query = "INSERT INTO produit (nom, type, labo) VALUES (?)"
	const values = [
		req.body.Nom,
		req.body.Type,
		req.body.Labo,
	]
	if (values.some(value => !value)) {
    	console.log("Some fields are missing.");
	} else {
    	db.query(sql_query,[values], (err, data)=>{
		if(err) return res.json(err);
		return res.json(data);
	}) 
	}

})



app.delete("/inventaire/:id",(req,res)=>{
	const sql_query = "DELETE FROM produit WHERE idp= ?"
	const idp = req.params.id;
	db.query(sql_query,[idp],(err,data)=>{
		if(err) return res.json(err);
		return res.json(data);
	})
})
/************gestion INVENTER*************/








app.listen(8081,()=>{
	console.log("listening.........");
})