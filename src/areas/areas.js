import React, { Component } from 'react';
import Area from './area'

class Areas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			areas: []
		};
		this.getDataFromApi = this.getDataFromApi.bind(this);
		this.refreshData = this.refreshData.bind(this);
	}

	componentDidMount() {
		this.getDataFromApi();
	}

	refreshData() {
		this.getDataFromApi();
	}

	getDataFromApi () {
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
				<Area key={area.id + area.name} area={area} refreshData={this.refreshData} />
			);
		});
	  	let newArea = {
	  		id: 0,
	  		position: 0,
	  		name: ''
	  	}

	    return [
	    	<h6 key='areas-header'>Areas</h6>,
	    	<div key='areas-body' className="card">
	    		{areaVal}
	    		<Area key={newArea.id + newArea.name} area={newArea} refreshData={this.refreshData} />	    		
	    	</div>
	  	];
	}
}

export default Areas;