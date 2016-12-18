import React, {Component, PropTypes} from 'react'
import * as Tabs from './../constants/TabNames'
import Header from '../components/Header'
import GeneralNews from '../components/tabs/GeneralNews'
import SoftwareProducts from '../components/tabs/SoftwareProducts'
import AndroidApp from '../components/tabs/AndroidApp'
import GeneralContacts from '../components/tabs/GeneralContacts'

class MainSection extends Component {
	renderTab(tabId) {
		switch (tabId) {
			case Tabs.GENERAL_NEWS:
				return <GeneralNews/>;
			case Tabs.SCIENTIFIC_NEWS:
				return <div></div>;
			case Tabs.SOFTWARE_PRODUCTS:
				return <SoftwareProducts/>;
			case Tabs.HARDWARE_PRODUCTS:
				return <div></div>;
			case Tabs.ANDROID_APP:
				return <AndroidApp/>;
			case Tabs.IOS_APP:
				return <div></div>;
			case Tabs.GENERAL_CONTACTS:
				return <GeneralContacts/>;
				case Tabs.MAP_CONTACTS:
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
