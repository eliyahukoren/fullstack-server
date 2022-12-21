import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Header from "../Header/Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
const PageNotFound = () => <h2>PageNotFound</h2>;

class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}


	render() {
		return (
			<div className="container">
				<Header />
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/surveys" exact component={Dashboard} />
						<Route path="/surveys/new" exact component={SurveyNew} />
						<Route component={PageNotFound} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
