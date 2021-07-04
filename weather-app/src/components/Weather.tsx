export const Weather = (searchResult: any) => {
	console.log(searchResult,"hnng")
	return (
		<div className=''>
			<div key={searchResult.id}>
				{/* <img alt='' src={searchResult.album.cover_small} /> */}
				<b>{searchResult.name} </b>
				<small> in <i>{searchResult.sys.country}</i></small>
				<br />
				<b>{searchResult.weather[0].main} </b>
				<small> lots of <i>{searchResult.weather[0].description}</i></small>
				<hr />
			</div>
		</div>
	);
};
