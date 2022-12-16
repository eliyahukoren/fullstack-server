/*
const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const mongoose = require("mongoose");
const { githubClientID, githubClientSecret  } =
	require("../config/keys").auth.github;

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

const ru = (filter, userOptions, done) => {
	User.findOne(filter)
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

const gh = (accessToken, refreshToken, profile, done) => {
	ru(
		{ githubId: profile.id },
		{
			githubId: profile.id,
			age: 52,
		},
		done
	);
};

const githubStrategyOptions = {
	clientID: githubClientID,
	clientSecret: githubClientSecret,
	callbackURL: "/auth/github/callback",
};

passport.use(new GitHubStrategy(githubStrategyOptions, gh));
*/
