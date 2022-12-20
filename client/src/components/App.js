import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { useDispatch} from "react-redux";
// import { increment } from "../features/authSlice";
// import { simplement } from "../features/anySlice";

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
const PageNotFound = () => <h2>PageNotFound</h2>

const App = () => {
	// const dispatch = useDispatch();

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/surveys" exact={true} component={Dashboard} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
