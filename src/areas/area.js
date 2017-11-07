import React, { Component } from 'react';

class Area extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.area.id,
			position: this.props.area.attributes.position,
			name: this.props.area.attributes.name
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleUpdate() {
		const url = 'http://localhost:3001/api/v1/areas/' + this.state.id;
		const area = {
		   "position": this.state.position,
		   "name": this.state.name
		}

		fetch(url, {
		    method: "PATCH",
		    headers: {
	          'Accept': 'application/json',
	          'Content-Type': 'application/json',
	        },
		    body: JSON.stringify(area)
		})
		.then(function(response){ 
		 return response.json();   
		})
		.then(function(area){ 
		// console.log(area)
		});
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value; 
		this.setState({
			[name]: value
		});
	}	

	handleBlur(event) {
		const name = event.target.name;
		const value = event.target.value; 
		// this.setState({
		// 	[name]: value
		// });
		console.log(name);
		console.log(value);
	}

	render() {
		return [
			<div key={this.state.id} 
				className='row' >
				<div className="col-sm-3 pr-0">
					<input type='number' name='position' value={this.state.position} min='1' onChange={this.handleChange} onBlur={this.handleBlur} className='form-control form-control-sm' />
				</div>
				<div className="col-sm-7 pr-0">
					<input type='text' name='name' value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} className='form-control form-control-sm' />
				</div>
				<div className='col-sm-2'>					
					<i className='fa fa-times text-secondary mx-2 hand'></i>
				</div>
			</div>
		]
	}
}
export default Area;