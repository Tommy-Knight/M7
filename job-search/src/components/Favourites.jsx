import React, { Component } from "react"
import { connect } from "react-redux"

const mapStateToProps = (cheesetoastie) => cheesetoastie
class Favourites extends Component {
	render() {
		return (
			<div className="App-header">{this.props.match.params.id} is great</div>
		)
	}
}
export default connect(mapStateToProps)(Favourites)
