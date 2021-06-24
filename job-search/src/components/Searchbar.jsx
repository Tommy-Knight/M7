import React, { Component } from "react"
import { Container, Button, Spinner, Row, Card, Col } from "react-bootstrap"

import { connect } from 'react-redux'

import { addToFavourites } from '../actions'
import {fetchAll} from '../actions'

const mapStateToProps = cheesetoastie => cheesetoastie

const mapDispatchToProps = (dispatch) => ({
  addFav: (job) => {
    dispatch(addToFavourites(job))
  },
  fetchJobs: (job =>{
	  dispatch(fetchAll(job))
  })
})

class Searchbar extends Component {
	state = {
		searchInput: "",
		loading: false,
		data: {},
	}

	fetchAll = async () => {
		try {
			this.setState({ loading: true })
			const resp = await fetch(
				`https://remotive.io/api/remote-jobs?search=${this.state.searchInput}`
			)
			const data = await resp.json()
			this.setState({ loading: false })
			this.setState({ data })
			console.log(this.state.searchInput, `search returns`, this.state.data)
		} catch (error) {
			console.log(error)
		}
	}

	handleCheck = (id) => {
		this.props.addFav(id.target.value)
		this.props.fetchJobs(this.state.data)
	}

	render() {
		return (
			// 
			<div className="App-header">
				Looking for a Job yeah?
				{/* input for job search */}
				<input
					type="text"
					e=""
					className="m-2"
					onChange={(e) => {
						this.setState({ searchInput: e.target.value })
					}}
				/>
				{/* loading button */}
				<div className="btn-group">
				{this.state.loading ? (
						<Button variant="dark" disabled>
							<Spinner
								as="span"
								animation="border"
								size="sm"
								role="status"
								aria-hidden="true"
							/>
							<span className=""> Searching...</span>
						</Button>
					) : (
						<Button variant="dark" onClick={this.fetchAll}>
							<span className="">Search</span>
						</Button>
					)}<Button style={{display:"inline-block"}} variant="dark" onClick={()=>{}} >
							<span className="">Favourites</span>
						</Button>
					</div>
				{/* Mapping job cards */}
				<Container className="center">
					<Row>
						{this.state.data.jobs &&
							this.state.data.jobs.map((job) => (
								<Col key={job.id}>
									<Card
										className="bg-dark"
										style={{
											height: "11rem",
											width: "18rem",
											margin: "2px",
											fontSize: "1rem",
											textAlign: "center",
										}}
										title={job.id}
									>
										<Card.Body>
											<Card.Text>
												<b>{job.title}</b>
											</Card.Text>
											<Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
											<Card.Text>{job.category}</Card.Text>
											<Card.Link href={"/" + job.company_name}>
												{job.company_name}
											</Card.Link>
											<br/>

											<span>
												<input type="checkbox" id={job.id} name="favourites" value={job.company_name} onClick={(e) => {
						this.handleCheck(e)
					}}/>
												        Favourite
											</span>

										</Card.Body>
									</Card>
								</Col>
							))}
					</Row>
				</Container>
			</div>
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);