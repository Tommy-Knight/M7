import React, { Component } from "react"
import { Container, Button, Spinner, Row, Card, Col } from "react-bootstrap"

export default class Searchbar extends Component {
	state = {
		searchInput: "",
		loading: false,
		data: {},
	}

	saveSearchInput = async (e) => {
		this.setState({ searchInput: e.target.value })
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
			console.log(this.state.searchInput, "search returns", this.state.data)
		} catch (error) {
			console.log(error)
		}
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
						this.saveSearchInput(e)
					}}
				/>
				{/* loading button */}
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
				)}
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
