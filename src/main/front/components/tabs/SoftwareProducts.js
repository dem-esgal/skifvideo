import React, {PropTypes, Component} from 'react'
import Well from 'react-bootstrap/lib/Well'

class SoftwareProduct extends Component {
	render() {
		return (
			<Well>
				Разрабатываются библиотеки для видеоаналитики,
				целью которыхявляется получение в реальном времени информации о качестве съемки камер охранного телефидения.
			</Well>
		)
	}
}

export default SoftwareProduct
