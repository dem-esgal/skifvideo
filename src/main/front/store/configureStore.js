import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index.js'

const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState, applyMiddleware(thunk, createLogger()));

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
