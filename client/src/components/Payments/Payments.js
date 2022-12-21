import {React, Component} from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
	onToken = (token) => {
		console.log({token});
	}
	render(){
		return (
			<StripeCheckout
				amount={500}
				token={this.onToken}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			/>
		);
	}
}

export default Payments;
