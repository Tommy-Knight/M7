
export const Weather = (searchResult: any) => {

	return (
		<div className=''>
			{searchResult.data.map((item: any) => {
				return (
					<div key={item.id}>
						<img alt='' src={item.album.cover_small} />
						<b>{item.title} </b>
						<small> by {item.artist.name}</small>
						<br />
						<hr />
					</div>
				);
			})}
		</div>
	);
};
