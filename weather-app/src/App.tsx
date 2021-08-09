import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/App.scss";
import Search from "./components/Search"

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' render={(routeProps) => <Search {...routeProps} />} />
				</Switch>
					<div className='star'>
						<div className='stars'></div>
						<div className='stars'></div>
						<div className='stars'></div>
						<div className='stars'></div>
						<div className='stars'></div>
						<div className='stars'></div>
						<div className='stars'></div>
						<div className='stars'></div>
					</div>
			</Router>
		);
	}
}

export default App;
