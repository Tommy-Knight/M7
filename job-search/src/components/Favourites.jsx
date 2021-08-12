import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Card, Col } from "react-bootstrap";


const Favourites = (props) => {
	return (
		<div className='App-header'>
			<Container className='center'>
				{props.favourites.favourites.length > 0 ? "Oh boy look at all your favs:" : "Go back and find something you like"}
				<br />
				<br />
				<Row>
					{props.favourites &&
						props.favourites.favourites.map((job) => (
							<Col key={job.id}>
								<Card
									className='bg-dark mb-2 hoverme'
									style={{
										height: "11rem",
										width: "18rem",
										margin: "2px",
										fontSize: "1rem",
										textAlign: "center",
									}}
									title={job.id}>
									<Card.Body>
										<Card.Text>
											<b>{job.title}</b>
										</Card.Text>
										<Card.Subtitle className='mb-2 text-muted'>{job.job_count}</Card.Subtitle>
										<Card.Text>{job.category}</Card.Text>
										<Card.Link href={"/company/" + job.company_name}>{job.company_name}</Card.Link>
										<br />
										{/* <span>
											<input
												type='checkbox'
												id={job.id}
												name='favourites'
												// onClick={(e) => {
												// 	addTofavourites(job);
												// }}
												value={job.company_name}
											/>{" "}
											Favourite
										</span> */}
									</Card.Body>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}



export default connect(s => s)(Favourites)
