//create an express server
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const path = require("path");
import { Secret } from "jsonwebtoken";
import { MongoError } from "./utils/interfaces";

// //import routes from the routes folder
const authRoute = require("./router/auth.ts");
const apiRoutes = require("./router/api.routes");

//use middlewares
app.use(express.json());
app.use("/api/v1/", cors(), apiRoutes);
app.use("/api/user",cors(), authRoute);

//create a home route
app.get("/", (req: any, res: any) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

//connect to mongoDB
mongoose.connect(uri as Secret, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.use(bodyParser.json());
    app.use(cors());
}).catch((err: MongoError) => {
    console.log(err);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('MongoDB Connected...');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
