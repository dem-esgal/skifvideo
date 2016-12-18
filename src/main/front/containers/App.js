import '../assets/sass/bootstrap.scss'
import '../assets/sass/app.scss'

import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LeftPanel from '../components/LeftPanel'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/actions'
import Grid  from 'react-bootstrap/lib/Grid'
import Col  from 'react-bootstrap/lib/Col'
import Row  from 'react-bootstrap/lib/Row'

class App extends Component {
	render() {
		const {actions, tabId} = this.props
		return (
		<Grid fluid className="app">
			<Row>
				<Col sm={2}>
					<LeftPanel onSelect={actions.openTab} selectedTab={tabId}/>
				</Col>
				<Col sm={10}>
					<MainSection tabId={tabId}/>
				</Col>
			</Row>
		</Grid>
		)
	}
}

App.propTypes = {
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		tabId : state.tabs.tabId
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(TodoActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
