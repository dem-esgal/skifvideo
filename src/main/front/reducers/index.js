import { combineReducers } from 'redux'
import tabs from './Tabs'
import getData from './GetData'

const rootReducer = combineReducers({
	tabs, getData
});

export default rootReducer;