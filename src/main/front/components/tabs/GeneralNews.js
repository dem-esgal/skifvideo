import React, {PropTypes, Component} from 'react'
import Well from 'react-bootstrap/lib/Well'

class GeneralNews extends Component {
	render() {
		return (
			<Well>
				Компания "ООО СКИФВИДЕО" занимается разработкой ПО для анализа изображений и видео.
				Одним из основных направлений является разработка алгоритмов оценки качества изображений.
				Компания основана в г. Ярославле в 2016 году.
			</Well>
		)
	}
}

export default GeneralNews