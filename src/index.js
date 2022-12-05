import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// const rootElement = document.getElementById("root")
// if(rootElement.hasChildNodes()){
// 	hydrate(App,rootElement);

// }else {
// 	render(App, rootElement);
// }

// ServiceWorker.unregister();
