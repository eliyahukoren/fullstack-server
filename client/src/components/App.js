import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";

// import { useDispatch} from "react-redux";
// import { increment } from "../features/authSlice";
// import { simplement } from "../features/anySlice";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
const PageNotFound = () => <h2>PageNotFound</h2>;

const App = () => {
	// const dispatch = useDispatch();

	return (
		<div>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/surveys" exact component={Dashboard} />
					<Route
						path="/surveys/new"
						exact
						component={SurveyNew}
					/>
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
