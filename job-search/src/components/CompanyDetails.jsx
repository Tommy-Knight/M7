import React, { Component } from 'react'

export default class CompanyDetails extends Component {

componentDidMount() {

}
    render() {
        return (<div className="App-header">
            {this.props.match.params.id} is great
        </div>)
    }
}
