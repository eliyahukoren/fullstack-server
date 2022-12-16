const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const { googleClientID, googleClientSecret } =
	require("../config/keys").auth.google;

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
	clientID: googleClientID,
	clientSecret: googleClientSecret,
	callbackURL: "/auth/google/callback",
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


