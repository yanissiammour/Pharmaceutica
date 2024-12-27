const mysql = require("mysql");

const db = mysql.createConnection({
    host:"brytwnzaohrxzc2nayzo-mysql.services.clever-cloud.com",
    user:"uinczc6eg1azrw7f",
    password:"4HQfuWY1p83mTZxl8WVe",
    database:"brytwnzaohrxzc2nayzo"
})

function chose_Tab(ind) {
    switch (ind) {
        case 1:
            return [
                "Product",
                "(name, type, lab)",
                "idp"
            ];
        case 2:
            return [
                "Client",
                "(name, category, address, phone_number, email)",
                "idc"
            ];
        case 3:
            return [
                "Transaction",
                "(idp, idc, date, quantity, price)",
                "idt"
            ];
        default:
            console.error("Invalid pageID:", ind); // Log invalid pageID
            return null;
    }
}



function chose_val(elementData,ind){
     var value=[]
    switch(ind){
        case 1:
             value = [
            elementData.name,
            elementData.type,
            elementData.lab
            ]
            return value;
        break;
        case 2:
            value = [
            elementData.name,
            elementData.category,
            elementData.address,
            elementData.phone_number,
            elementData.email
            ]
            return value; 
        break;
        case 3:
            value = [
            elementData.quantity,
            elementData.idp,
            elementData.name,
            elementData.address
            ]
            return value; 
        break;


    }
}






/************BUSINESS LOGIC*************/

const getAllElements = (pageID,callback)=>{
    console.log("MODEL pageID value:", pageID);
    let sql_query="";
    if(pageID===3){sql_query= "SELECT t.idt, DATE_FORMAT(t.date, '%Y-%m-%d') AS formatted_date, t.quantity, t.price, p.name AS product_name, p.type AS product_type, c.name AS client_name FROM `Transaction` t JOIN `Product` p ON t.idp = p.idp JOIN `Client` c ON t.idc = c.idc"}
	else{sql_query = "SELECT * FROM "+chose_Tab(pageID)[0]}
	 
     db.query(sql_query, (err, result) => {
	  if (err) {
            console.log(err);
            return callback(err, null);
        }
        return callback(null, result);
    });
}


//create an Element
const createElement  = (pageID,elementData,callback)=>{
    let sql_query="";
    
       var values = chose_val(elementData,pageID);
    console.log("MODEL Insert values:", values);

    if(pageID===3){ sql_query = `INSERT INTO Transaction (quantity, idc, idp, date, price)
SELECT 
    ?,  -- Example quantity
    c.idc,  -- idc from client table
    ?,  -- Example idp (product id)
    CURDATE(),  -- Current date
    p.price * ?  -- Calculated price: product price * quantity
FROM Client c
JOIN Product p ON p.idp = ?  -- Match the product id
WHERE c.name = ? AND c.address = ?;
`

db.query(sql_query,[values[0],values[1],values[0],values[1],values[2],values[3]], (err, result) => {
        if (err) {
            console.log(err);
            return callback(err, null);
        }
        return callback(null, result);
    });

}
    else{sql_query = "INSERT INTO "+chose_Tab(pageID)[0] + chose_Tab(pageID)[1]+"VALUES (?)"
    db.query(sql_query,[values], (err, result) => {
        if (err) {
            console.log(err);
            return callback(err, null);
        }
        return callback(null, result);
      });
    }
}



// Function to delete a Element

const deleteElement = (pageID,id, callback) => {
    const sql_query = "DELETE FROM "+chose_Tab(pageID)[0]+" WHERE "+chose_Tab(pageID)[2]+" = ?";
    db.query(sql_query, [id], (err, result) => {
        if (err) {
            console.log(err);
            return callback(err, null);
        }
        return callback(null, result);
    });
};

/************BUSINESS LOGIC*************/
module.exports = {
    getAllElements,
    createElement,
    deleteElement
};