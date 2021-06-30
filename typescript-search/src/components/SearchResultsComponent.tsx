import { searchResultData, searchResultInterface } from "../interfaces/index"




export const SearchResultsComponent = (searchResult:any) => {

	return (

		<div>
			{searchResult.data.map((item: searchResultInterface) => {
				return (<div key={item.id}>
					<b>
						<img alt="" src={item.album.cover_small} />
						{item.title}
						<br />
						<hr />
					</b>
				</div>)
			})}
		</div>

	)

}


