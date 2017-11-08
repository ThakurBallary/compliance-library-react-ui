import React, { Component } from 'react';
import Area from './area'

class Areas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			areas: []
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
	  	if (!this.state.areas) return <p>Areas Loading..</p>
	  	let areaVal = this.state.areas.map(area => {
			return (
				<Area key={area.id + area.name} area={area} />
			);
		});
	  	let newArea = {
	  		id: 0,
	  		position: 1,
	  		name: ''
	  	}

	    return [
	    	<h6 key='areas-header'>Areas</h6>,
	    	<div key='areas-body' className="card">
	    		<Area key={newArea.id + newArea.name} area={newArea} />
	    		{areaVal}
	    	</div>
	  	];
	}
}

export default Areas;