import React, {Component, PropTypes} from 'react'
import {HARDWARE_PRODUCTS} from './../constants/TabNames'
import Header from '../components/Header'

class MainSection extends Component {
	renderTab(tabId) {
		switch (tabId) {
			case HARDWARE_PRODUCTS:
				return <div></div>;
			default:
				return <div></div>;
		}
	}

	render() {
		const {tabId} = this.props

		return (
			<section>
				<Header />
				{this.renderTab(tabId)}
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		tabId : state.tabs.tabId
	}
}

MainSection.propTypes = {
	tabId: PropTypes.string.isRequired
}

export default MainSection
