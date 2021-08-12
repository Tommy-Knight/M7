import React, { useState } from "react";
import { Container, Button, Spinner, Row, Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addToFavsAction, fetchJobsAction } from "../redux/actions";

export const SearchBar = (props) => {
	const [searchInput, setSearchInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [favourites, setFavourites] = useState([]);


	const fetchAll = () => {
		props.searchJobs(searchInput)
	};

	const goToFavs = () => {
		const fav = "/favourites";
		props.history.push(fav);
	};

	const addTofavourites = (job) => {
		const yes = favourites;
		yes.push(job);
		setFavourites(yes);
		props.addToFavs(favourites);
	};

	return (
		//
		<div className='App-header'>
			Looking for a Job yeah?
			{/* input for job search */}
			<input
				type='text'
				e=''
				className='m-2'
				onChange={(e) => {
					setSearchInput(e.target.value);
				}}
			/>
			{/* loading button */}
			<div className='btn-group'>
				{loading ? (
					<Button variant='dark' disabled>
						<Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
						<span className=''> Searching...</span>
					</Button>
				) : (
					<Button variant='dark' onClick={fetchAll}>
						<span className=''>Search</span>
					</Button>
				)}
				<Button style={{ display: "inline-block" }} variant='dark' onClick={goToFavs}>
					<span className=''>Favourites</span>
				</Button>
			</div>
			{/* Mapping job cards */}
			<Container className='center'>
				<Row>
					{props.jobs.jobs &&
						props.jobs.jobs.jobs.map((job) => (
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
										<span>
											<input
												type='checkbox'
												id={job.id}
												name='favourites'
												onClick={(e) => {
													addTofavourites(job);
												}}
												value={job.company_name}
											/>{" "}
											Favourite
										</span>
									</Card.Body>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addToFavs: (fav) => dispatch(addToFavsAction(fav)),
	searchJobs: (search) => dispatch(fetchJobsAction(search)),
});

export default connect((s) => s, mapDispatchToProps)(SearchBar);
