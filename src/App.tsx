import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import PostListContainer from "./containers/postList";
import configureStore from "./state";

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PostListContainer />
		</Provider>
	);
};

export default App;
