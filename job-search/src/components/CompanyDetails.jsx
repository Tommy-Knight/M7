import React, { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import {formatDistanceToNow} from "date-fns"

class CompanyDetails extends Component {
	state = {
		data: null,
	};

	componentDidMount() {
		this.fetchCompany();
	}

	fetchCompany = async () => {
		try {
			this.setState({ loading: true });
			const resp = await fetch(
				`https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.id}`
			);
			const data = await resp.json();
			this.setState({ data });
		} catch (error) {
			console.log(error);
		}
	};  

	render() {
		return (
			<div className='App-header'>
				<h4>
				    {this.props.match.params.id} is great!
				</h4>
                    <br/>
				<Container className='center'>
						{this.state.data?.jobs.map((job) => (
					<Row>
							<Col key={job.id}>
								<Card
									className='bg-dark mb-2 hoverme'
									style={{
										margin: "2px",
										fontSize: "1rem",
										textAlign: "center",
									}}
									title={job.id}>
									<Card.Body>
										<Card.Text>
											<b>{job.title}</b>
										</Card.Text>
										<Card.Subtitle className='mb-2 text-muted'>
											{this.props.match.params.id} posted this {formatDistanceToNow(new Date(job.publication_date))} ago
										</Card.Subtitle>
										<Card.Text>{job.category}</Card.Text>
										<Card.Text dangerouslySetInnerHTML={{ __html: job.description }}></Card.Text>
										<br />

										{/* <span>
												<input
													type='checkbox'
													id={job.id}
													name='favourites'
													value={job.company_name}
													onClick={(e) => {
														this.handleCheck(e);
													}}
												/>
												Favourite
											</span> */}
									</Card.Body>
								</Card>
							</Col>
					</Row>
						))}
				</Container>
			</div>
		);
	}
}
export default CompanyDetails;
