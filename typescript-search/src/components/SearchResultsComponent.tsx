import { searchResultInterface } from "../interfaces/index"

// export default function SearchResults(searchResult:any) {
//     return (
//         <div>
//             {searchResult.data.map((item:any) => {
//                 <b>{item.title}</b>
//             })}
//         </div>
//     )
// }
const SearchResultsComponent = (searchResult: any) =>
	searchResult.data.map((item: any) => {
		
		return (
			<div>
				<b key={item.id}>
					<img alt="" src={item.album.cover_small} />
					{item.title}
					<br />
					<hr />
				</b>
			</div>
		)
	})

export default SearchResultsComponent
