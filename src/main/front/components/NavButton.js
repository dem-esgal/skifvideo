import React, {PropTypes, Component} from 'react'
import Button from 'react-bootstrap/lib/Button'

class NavButton extends Component {
	render() {
		const openTab = this.props.onSelect;
		const buttonClass="page-link " + (this.props.selected == this.props.tabId ? "selected-page" : "");
		return (
			<Button bsClass={buttonClass} bsSize="xsmall"
					onClick={() => openTab(this.props.tabId)}>{this.props.name}</Button>
		)
	}
}

NavButton.propTypes = {
	tabId: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	selected: PropTypes.string
}

export default NavButton
