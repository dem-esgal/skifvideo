import * as types from '../constants/ActionTypes'
import {OPEN_TAB,RECIEVE_DATA,FETCH_DATA,REQUEST_DATA} from '../constants/ActionTypes'

const GET = {
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Origin': '',
		'Host': 'api.producthunt.com'
	},
	header: {
		"dataType": "json"
	}
}

export function openTab(tabId) {
	return {type: OPEN_TAB, tabId}
}

const requestList  = () => {
	return {
		type: REQUEST_DATA,
		data: []
	}
}
/*
export function getData() {
	return dispatch => {
		dispatch({type: REQUEST_DATA, data: []})
		fetch("/modelControl", GET)
			.then(response => {
				return response.json()
			})
			.then(json => {
				dispatch(receiveList, json)
			})
	};
}*/

export function getData() {
	return (dispatch) => {
		dispatch(requestList());

		fetch("/modelControl", GET)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then((items) => dispatch(receiveList(items)));
	};
}

const receiveList = (list) => {
	return {
		type: RECIEVE_DATA,
		data: list
	}
}