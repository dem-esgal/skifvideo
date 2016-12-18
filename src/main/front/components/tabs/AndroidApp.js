import React, {PropTypes, Component} from 'react'
import Well from 'react-bootstrap/lib/Well'

class AndroidApp extends Component {
	render() {
		return (
			<Well>
				Приложение "Оценка Качества"
				предназначено для определения качества ракурса съемки и четкости полученных на изображениях лиц.
			</Well>
		)
	}
}

export default AndroidApp
