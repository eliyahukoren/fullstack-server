const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

const googleStrategyOptions = {
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: "/auth/google/callback",
	proxy: true,
};

const initUser = (filterQuery, userOptions, done) => {
	User.findOne(filterQuery)
		.then((existingUser) => {
			if (existingUser) {
				// do not create user, user already exists
				console.log("USER EXISTS");
				done(null, existingUser);
			} else {
				new User(userOptions).save().then((user) => done(null, user));
				console.log("USER NOT EXISTS");
			}
		})
		.catch((err) => console.log(err));
};

const verify = (accessToken, refreshToken, profile, done) => {
	initUser(
		{ googleId: profile.id },
		{
			googleId: profile.id,
			age: 52,
		},
		done
	);
};

passport.use(new GoogleStrategy(googleStrategyOptions, verify));


