import { ResponseInterface } from "../store/types";
import unknown from "../style/icons/unknown.png";

export const Weather = (searchResult: ResponseInterface) => {
	return (
		<div>
			<div key={searchResult.id}>
				<img
					style={{ width: "30px" }}
					alt={`icon`}
					src={window.location.origin + `/` + searchResult.weather[0].icon + `.png`}
				/>
				<br />
				<b>{searchResult.name} </b>
				<small>
					{" "}
					in <i>{searchResult.sys.country}</i>
				</small>
				<br />
				<b>Temperature</b>
				<small>
					{" "}
					is <i>{searchResult.main.temp} °C</i>
				</small>
				<br />
				<b>{searchResult.weather[0].main} </b>
				<small>
					{" "}
					currently <i>{searchResult.weather[0].description}</i>
					{"  "}
				</small>
			</div>
		</div>
	);
};
