const express = require("express");
const cors = require("cors");
const Routes = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/Pharmaceutica", Routes);

app.listen(8081, () => {
    console.log("Server is running on port 8081...");
});