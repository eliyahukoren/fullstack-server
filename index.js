const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
// require("./services/githubPassport");

mongoose.set("strictQuery", false);
mongoose.connect(keys.mongoURI)
.then( res => {
	console.log('Connected to MongoDB');
})
.catch(err => console.log(err));

const app = express();

// middlewares
app.use(
	cookieSession({
		name: 'session',
		keys: [keys.cookieKey],
		maxAge: 60 * 60 * 1000
	})
);

app.use(passport.initialize());
app.use(passport.session());

// routers
require("./routes/authRoutes")(app);

/* my implementation of routers */
app.get("/login", (req, res) => {
	res.sendFile("views/login.html", { root: __dirname });
});

/* my implementation of routers */
app.use((req, res, next) => {
	res.status(404).sendFile("views/404.html", {root: __dirname});
});

const PORT = process.env.PORT || 5001;
app.listen(PORT);
