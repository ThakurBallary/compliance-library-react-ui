import React, { Component } from 'react';
import Area from './area'
import './areas.css';

class Areas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			areas: {}
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/v1/areas')
		.then(response => response.json())
		.then(areas => {
			this.setState({areas: areas})
		})
	}

  render() {
  	if (!this.state.areas) return <p>Loading..</p>
  	let areaVal;
		if(this.state.areas.data) {
			areaVal = this.state.areas.data.map(area => {
				return (
					<Area key={area.position} area={area} />
				);
			});
		}
    return [
    	<div className="test">
    		Areas List
    		{areaVal}
    	</div>
  	];
  }
}

export default Areas;