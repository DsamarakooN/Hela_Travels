const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {errorHandler} = require('./middleware/errorMiddleware');

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connectDB = require("./config/db.js");
connectDB();



app.use('/api/users', require('./routes/userRoutes.js'))
app.use("/api/drivers", require("./routes/driverRoutes.js"))
app.use("/api/guides", require("./routes/guideRoutes.js"))

app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`🚀Server is up and running on port number:${PORT}`)
    
})