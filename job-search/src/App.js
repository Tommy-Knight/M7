import "bootstrap/dist/css/bootstrap.min.css"
import './styles/App.css';
import React, { Component } from 'react'
import Searchbar from './components/Searchbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails';


export default class App extends Component {


  render() {
    return (
    
      <Router>
				<Switch>
					<Route path="/" exact component={Searchbar} />
					<Route path="/:id" exact component={CompanyDetails} />
				</Switch>
			</Router>

    )
  }
}