import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';
import React, { Component } from 'react'
import Searchbar from './components/Searchbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails';
import Favourites from './components/Favourites'


export default class App extends Component {


  render() {
    return (
			<Router>
				<Switch>
					<Route path='/' exact component={Searchbar} />
					<Route path='/company/:id' exact component={CompanyDetails} />
					<Route path='/favourites' exact component={Favourites} />
				</Switch>
			</Router>
		);
  }
}