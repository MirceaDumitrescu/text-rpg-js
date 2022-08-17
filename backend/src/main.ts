//create an express server
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

interface MongoError {
    code?: number;
    codeName?: string;
    errmsg?: string;
    message?: string;
    name?: string;
    stack?: string;
}

// //import routes from the routes folder
// const authRoute = require("./router/auth.ts");
// const apiRoutes = require("./router/api.routes");
// app.use("/api/v1/", apiRoutes);
// app.use("/api/user", authRoute);

//connect to mongoDB
mongoose.connect(uri as String, { useNewUrlParser: true, useUnifiedTopology: true })
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
