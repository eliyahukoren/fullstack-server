const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const keys = require("./config/keys");

mongoose.set("strictQuery", false);
mongoose.connect(keys.mongoURI)
.then( res => {
	console.log('Connected to MongoDB');
})

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
