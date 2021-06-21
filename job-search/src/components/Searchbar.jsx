import React, { Component } from "react"
import { Container, Button, Spinner, Row, Card } from "react-bootstrap"
import "../styles/App.css"

export default class Searchbar extends Component {
	state = {
		searchInput: "",
		loading: false,
		jobs: "",
		data: {},
	}

	saveSearchInput = async (e) => {
		this.setState({ searchInput: e.target.value })
		this.fetchAll(e.target.value)
	}

	// componentDidMount = () => {
	// 	this.fetchAll()
	// }

	fetchAll = async () => {
		try {
			this.setState({ loading: true })
			const resp = await fetch(`https://remotive.io/api/remote-jobs?=${this.state.searchInput}`)
			const data = await resp.json()
			this.setState({ loading: false })
			this.setState({ comments: data.comments })
			console.log(this.state.searchInput, "state is", data)
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<Container className="App-header">
				Looking for a Job yeah?
				<input
					type="text"
					e=""
					onChange={(e) => {
						this.saveSearchInput(e)
					}}
				/>
				{this.state.loading && (
					<Button variant="primary" disabled>
						<Spinner
							as="span"
							animation="border"
							size="lg"
							role="status"
							aria-hidden="true"
						/>
						<span className="">Searching...</span>
					</Button>
				)}
				<Row>
					{this.state.data.jobs && this.state.data.jobs.map((job) => (
						<Card style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>{job.title}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
								</Card.Subtitle>
								<Card.Text>

								</Card.Text>
								<Card.Link href="#">{job.company_name}</Card.Link>
							</Card.Body>
						</Card>
					))}
				</Row>
			</Container>
		)
	}
}
