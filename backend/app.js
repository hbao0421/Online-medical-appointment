const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const router = require("./Routes/Doctor-routes");

connectDB();
const app = express();
app.use(express.json({extended:false}));
app.use(cors());
app.use("/doctors",router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server started on prot ${PORT}`)});