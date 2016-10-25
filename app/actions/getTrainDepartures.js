import config from '../config.js';
import { fetch } from '../utils.js';
import { RECEIVE_TRAINS, REQUEST_TRAINS, HTTP_ERROR } from '../actionTypes';

function request() {
	return {
		type: REQUEST_TRAINS
	};
}

function receive(data) {
	return {
		type: RECEIVE_TRAINS,
		data
	};
}

function httpError() {
	return {
		type: HTTP_ERROR
	};
}

export default function getTrains() {
	const {departures, basehost} =config.api;
	const url = `${basehost}/${departures}`;
	return (dispatch) => {
		dispatch(request());
		return fetch(url, {json: true})
			.then((response) => dispatch(receive(response)))
			.catch((error) => dispatch(httpError(error)));
	};
}
