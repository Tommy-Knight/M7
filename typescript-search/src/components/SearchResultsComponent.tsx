import { searchResultData, searchResultInterface } from "../interfaces/index"

export const SearchResultsComponent = (
	searchResult: searchResultData
) => {
	return (
		<div className="">
			{searchResult.data.map((item: searchResultInterface) => {
				return (
					<div key={item.id}>
						<img alt="" src={item.album.cover_small} />
						<b>{item.title} </b>
						<small> by {item.artist.name}</small>
						<br />
						<hr />
					</div>
				)
			})}
		</div>
	)
}
