import {searchResultInterface} from "../interfaces/index"

const SearchResults = (searchResult: any) =>
	searchResult.data.map((item: any) => {
		return <b>{item.title}</b>
	})

export default SearchResults


// export default function SearchResults(searchResult:any) {
    
    
//     return (
//         <div>
//             {searchResult.data.map((item:any) => {
//                 <b>{item.title}</b>
//             })}
//         </div>
//     )
// }

