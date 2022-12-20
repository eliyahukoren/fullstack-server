import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { applyMiddleware} from "redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
