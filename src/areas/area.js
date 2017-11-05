import React, { Component } from 'react';

class Area extends Component {

	render() {
		return [
			<li key={this.props.area.id} className="area">
				{this.props.area.attributes.position} - {this.props.area.attributes.name}
			</li>
		]
	}

}
export default Area;