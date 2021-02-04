import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
	<>
		<GlobalStyles />
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</>,
	document.getElementById("root")
);
