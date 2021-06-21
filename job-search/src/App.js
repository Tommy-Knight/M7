import './styles/App.css';
import React, { Component } from 'react'
import Searchbar from './components/Searchbar'

export default class App extends Component {


  render() {
    return (
      <div className="App">
      <Searchbar/>
    </div>
    )
  }
}