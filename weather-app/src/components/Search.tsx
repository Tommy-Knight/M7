import { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Weather } from "./Weather";

export default function Search(props: RouteComponentProps) {
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchResult, setSearchResult] = useState<any | undefined>(undefined);

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const result = await fetch(
				"https://striveschool-api.herokuapp.com/api/deezer/search?q=" + searchValue
			);

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
					placeholder='🔎 Location ...'
					style={{
						padding: "3px",
						height: "30px",
						backgroundColor: "cyan",
						borderRadius: "30px",
						border: "4px groove cyan",
						textAlign: "center",
						marginTop: "10px",
						marginBottom: "10px",
					}}
					value={searchValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setSearchValue(e.target.value);
					}}
				/>
				<br />

				<button
					type='submit'
					style={{
						padding: "3px",
						height: "30px",
						borderRadius: "30px",
						border: "2px groove white",
						textAlign: "center",
						marginTop: "10px",
						marginBottom: "10px",
					}}>
					🔥 POW 🔥
				</button>
			</form>
			{}
			{searchResult && <Weather {...searchResult} />}
		</>
	);
}
