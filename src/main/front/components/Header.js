import React, {PropTypes, Component} from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavItem  from 'react-bootstrap/lib/NavItem'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<Navbar>
					<Navbar.Collapse>
						<Nav navbar>
							<NavItem>Скифвидео</NavItem>
							<NavItem>Ярославль</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}

}
export default Header
