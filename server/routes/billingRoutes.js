const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
	// we will get the token
	// and apply payment for a client
	app.post("/api/stripe", async (req, res) => {

		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			source: req.body.id,
			description: "$5 for 5 credits",
		});

	})
}
