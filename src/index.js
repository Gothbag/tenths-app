import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import tenthsApp from "./reducers";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";

let middleware = [];

if (process.env.NODE_ENV !== "production") {
	middleware = [...middleware, logger];
}

const store = createStore(tenthsApp, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, 
document.getElementById("root"));
registerServiceWorker();
