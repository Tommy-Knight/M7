export const addToFavsAction = (favourite) => {
	return {
		type: "ADD_TO_FAVS",
		payload: favourite,
	};
};
export const removeFavsAction = (favourite) => {
	return {
		type: "REMOVE_FAVS",
		payload: favourite,
	};
};

export const fetchJobsAction = (jobs) => {
	return async (dispatch, getState) => {
		dispatch({ type: "LOADING", payload: true });
		const resp = await fetch(`https://remotive.io/api/remote-jobs?search=${jobs}`);
		const data = await resp.json();
		if (data.ok) {
			dispatch({ type: "LOADING", payload: false });
		}
		console.log(jobs, `search returns`, data);
		dispatch({
			type: "FETCH_JOBS",
			payload: data,
		});
	};
};
