import {React, Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "./tool.png";

class Payments extends Component {
	onToken = (token) => {
		console.log({token});
	}
	render(){
		return (
			<StripeCheckout
				name="Emaily"
				description="$5 for 5 email credits"
				image={logo}
				amount={500}
				token={this.onToken}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button className="btn">
					Add Credits
				</button>
			</StripeCheckout>
		);
	}
}

export default Payments;
