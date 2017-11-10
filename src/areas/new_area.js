import React, { Component } from 'react';

class NewArea extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			position: '',
			name: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.validInputs = this.validInputs.bind(this);
	}

	handleCreate() {
		const url = 'http://localhost:3001/api/v1/areas/';
		const area = {
		   "position": this.state.position,
		   "name": this.state.name
		}
		if (this.validInputs(area)) {
			var self = this;
			fetch(url, {
			    method: "POST",
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
				// console.log(area);
				self.props.refreshData();
			});
		}
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value; 
		this.setState({
			[name]: value
		});
	}

	validInputs(area) {
		return (area.position > 0 && area.name !== "");
	}

	render() {
		return [
			<div key={this.state.id} 
				className='row m-0 onhover-show-x border border-secondary'>
				<div className="col-sm-3 pr-0">
					<input type='number' 
						name='position'
						value={this.state.position} 
						min='0' 
						onChange={this.handleChange}
						onBlur={this.handleCreate} 
						className='form-control form-control-sm border-0' />
				</div>
				<div className="col-sm-8 p-0">
					<input type='text' 
						name='name' 
						placeholder='New'
						value={this.state.name} 
						onChange={this.handleChange}
						onBlur={this.handleCreate} 
						className='form-control form-control-sm border-0' />
				</div>
				<div className="col-sm-1 p-0 x-item">
					<i className='fa fa-info-circle mt-1 hand' 
						title='To Add click anywhere outside this box'></i>
				</div>
			</div>
		]
	}

} 
export default NewArea;