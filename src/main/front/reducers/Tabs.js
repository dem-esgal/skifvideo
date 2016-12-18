import {OPEN_TAB} from '../constants/ActionTypes'
import {GENERAL_NEWS, SCIENTIFIC_NEWS, SOFTWARE_PRODUCTS, HARDWARE_PRODUCTS} from '../constants/TabNames'

const initialState = {
	tabId: GENERAL_NEWS
}

export default function tabs(state = initialState, action) {
	switch (action.type) {
		case OPEN_TAB:
			return {...state, tabId: action.tabId}
		default:
			return state
	}
}



