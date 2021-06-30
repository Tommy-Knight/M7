import React, { ChangeEvent } from "react"
import { RouteComponentProps } from "react-router-dom"
import SearchResultsComponent from "./SearchResultsComponent"

const Search = (props: RouteComponentProps) => {
	const [searchValue, setSearchValue] = React.useState<string>("")
	const [searchResult, setSearchResult] = React.useState<string[] | undefined>(undefined)

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const result = await fetch(
				"https://striveschool-api.herokuapp.com/api/deezer/search?q="+searchValue
			)

			const data = await result.json()
			console.log(data)
			setSearchResult(data)

		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSearch(e)}>
				<input
					type="text"
					placeholder="Search For Something"
					value={searchValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setSearchValue(e.target.value)
					}}
				/>
				<button type="submit">POW</button>
			</form>
			{searchResult && <SearchResultsComponent {...searchResult} />}
		</>
	)
}

export default Search
