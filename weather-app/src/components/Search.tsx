import { ChangeEvent, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Weather } from "./Weather";

export default function Search(props: RouteComponentProps) {
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchResult, setSearchResult] = useState<any | undefined>(undefined);
	const [error, setError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setIsLoading(true);
			const result = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=9d33c3e69026b25a6cab7f300ec5e461`
			);

			const data = await result.json();
			console.log("response", data);
			setSearchResult(data);
			setIsLoading(false);
		} catch (error) {
			setError(true)
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
			{isLoading && <div>we loading baby</div>}
			{searchResult && <Weather {...searchResult} />}
		</>
	);
}
