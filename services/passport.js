const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const consola = require("consola");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	const user = User.findById(id);
	done(null, user);
});

const googleStrategyOptions = {
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: "/auth/google/callback",
	proxy: true,
};

const initUser = async (filterQuery, userOptions, done) => {
	const existingUser = await User.findOne(filterQuery)

	if (existingUser) {
		// do not create user, user already exists
		consola.info("USER EXISTS");
		return done(null, existingUser);
	}

	consola.info("USER NOT EXISTS");
	const user = await new User(userOptions).save();
	done(null, user);

};

const verifyCallback = (accessToken, refreshToken, profile, done) => {
	initUser(
		{ googleId: profile.id },
		{
			googleId: profile.id,
			age: 52,
		},
		done
	);
};

passport.use(new GoogleStrategy(googleStrategyOptions, verifyCallback));


