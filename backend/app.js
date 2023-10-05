const express = require("express");
const connectDB = require("./config/db");

connectDB();
const app = express();
app.use(express.json({extended:false}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server started on prot ${PORT}`)});