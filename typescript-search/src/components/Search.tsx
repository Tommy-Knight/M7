import { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { SearchResultsComponent } from "./SearchResultsComponent";
import { searchResultData } from "../interfaces/index";

export const Search = (props: RouteComponentProps) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchResult, setSearchResult] = useState<searchResultData | undefined>(undefined);

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const result = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue);

			const data = await result.json();
			console.log(data.data);
			setSearchResult(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<form className='App' onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSearch(e)}>
				<input
					type='text'
					placeholder=' La La La '
					value={searchValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setSearchValue(e.target.value);
					}}
				/>

				<button type='submit'>🔥 POW 🔥</button>
			</form>

			{searchResult && <SearchResultsComponent {...searchResult} />}
		</>
	);
};
