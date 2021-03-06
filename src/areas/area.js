import React, { Component } from 'react';

class Area extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.area.id,
			position: this.props.area.position,
			name: this.props.area.name
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.validInputs = this.validInputs.bind(this);
	}

	handleUpdate() {
		const url = 'http://localhost:3001/api/v1/areas/' + this.state.id;
		const area = {
		   "position": this.state.position,
		   "name": this.state.name
		}

		if (this.validInputs(area)) {
			var self = this;
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
				// console.log(area);
				self.props.refreshData();
			});
		}
	}

	validInputs(area) {
		return (area.position > 0 && area.name !== "");
	}

	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value; 
		this.setState({
			[name]: value
		});
	}

	handleDelete() {
		var self = this;
		const url = 'http://localhost:3001/api/v1/areas/' + this.state.id;
		fetch(url, {
			method: "DELETE"
		})
		.then(function(response){
			return response.json();
		})
		.then(function(area){
			// console.log(area);
			self.props.refreshData();
		});
	}

	render() {
		return [
			<div key={this.state.id} 
				className='row m-0 onhover-show-x border-right-0 border-left-0 border'>
				<div className="col-sm-3 pr-0">
					<input type='number' 
						name='position'
						value={this.state.position} 
						min='1' 
						onChange={this.handleChange}
						onBlur={this.handleUpdate} 
						className='form-control form-control-sm border-0' />
				</div>
				<div className="col-sm-8 p-0">
					<input type='text' 
						name='name' 
						placeholder='Name'
						value={this.state.name} 
						onChange={this.handleChange}
						onBlur={this.handleUpdate} 
						className='form-control form-control-sm border-0' />
				</div>
				<div className="col-sm-1 p-0 x-item">
					<i className='fa fa-times-circle mt-1 hand' 
						title='Delete'
						onClick={this.handleDelete}></i>
				</div>
			</div>
		]
	}

}
export default Area;