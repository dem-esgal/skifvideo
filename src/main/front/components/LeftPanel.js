import './../assets/sass/left-panel.scss'
import React, {PropTypes, Component} from 'react'
import PanelGroup from 'react-bootstrap/lib/PanelGroup'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Image from 'react-bootstrap/lib/Image'
import NavButton from './../components/NavButton'
import LogoImg from './../assets/images/logo.jpg';

import {
	GENERAL_NEWS, SCIENTIFIC_NEWS, HARDWARE_PRODUCTS, SOFTWARE_PRODUCTS, ANDROID_APP, IOS_APP, GENERAL_CONTACTS, MAP_CONTACTS
} from './../constants/TabNames'

class LeftPanel extends Component {
	render() {
		const openTab = this.props.onSelect;
		const tabId = this.props.selectedTab;

		return (
			<div className="left-panel">
				<div className="left-header">
					<Image src={LogoImg} responsive/>
				</div>
				<PanelGroup defaultActiveKey="1" accordion>
					<Panel header="Новости" eventKey="1">
						<NavButton name="Общие" onSelect={openTab} tabId={GENERAL_NEWS} selected={tabId}/>
						<NavButton name="Научные новости" onSelect={openTab} tabId={SCIENTIFIC_NEWS} selected={tabId}/>
					</Panel>
					<Panel header="ПО для видеоаналитики" eventKey="2">
						<NavButton name="Библиотеки" onSelect={openTab} tabId={SOFTWARE_PRODUCTS} selected={tabId}/>
						<NavButton name="Аппаратная часть" onSelect={openTab} tabId={HARDWARE_PRODUCTS} selected={tabId}/>
					</Panel>
					<Panel header="Мобильные приложения" eventKey="3">
						<NavButton name="Android" onSelect={openTab} tabId={ANDROID_APP} selected={tabId}/>
						<NavButton name="iOS" onSelect={openTab} tabId={IOS_APP} selected={tabId}/>
					</Panel>
					<Panel header="Контакты" eventKey="4">
						<NavButton name="Телефон, e-mail" onSelect={openTab} tabId={GENERAL_CONTACTS} selected={tabId}/>
						<NavButton name="Карты" onSelect={openTab} tabId={MAP_CONTACTS} selected={tabId}/>
					</Panel>
				</PanelGroup>
			</div>
		)
	}

}

LeftPanel.propTypes = {
	onSelect: PropTypes.func.isRequired,
	selectedTab: PropTypes.string.isRequired
}

export default LeftPanel
