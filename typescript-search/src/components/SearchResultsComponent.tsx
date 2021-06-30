import {searchResultInterface} from "../interfaces/index"

// export default function SearchResults(searchResult:searchResul) {
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
		return <b key={item.id}>{item.title}<br/></b>
	})

export default SearchResultsComponent


