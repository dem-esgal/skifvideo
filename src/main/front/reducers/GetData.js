import {REQUEST_DATA, RECIEVE_DATA} from '../constants/ActionTypes'

const initialState = {
	data: []
}

export default function getData(state = initialState, action) {
	switch (action.type) {
		case REQUEST_DATA:
			return {...state, data: []}
		case RECIEVE_DATA:
			return {...state, data: action.data}
		default:
			return state
	}
}