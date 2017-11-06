import React, { Component } from 'react';

class Area extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.area.id,
			position: this.props.area.attributes.position,
			name: this.props.area.attributes.name,
			editMode: false
		};
		this.handleEdit = this.handleEdit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleEdit() {
		this.setState(prevState => ({
			editMode: !prevState.editMode
		}));
	}

	handleUpdate() {
		this.setState({editMode: false});
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

	renderList() {
		return [
			<div key={this.state.id} 
				className='row' >
				<div className="col-sm-3">
					{this.state.position}</div>
				<div className="col-sm-7"> {this.state.name}</div>
				<div className='col-sm-2'>
					<i className='fa fa-pencil text-info mx-1 hand' onClick={this.handleEdit}></i>
					<i className='fa fa-trash-o text-danger mx-2 hand'></i>
				</div>
			</div>
		]
	}

	renderForm() {
		return [
			<div key={this.state.id} 
				className='row' >
				<div className="col-sm-3">
					<input type='number' name='position' value={this.state.position} min='1' onChange={this.handleChange} className='form-control' />
				</div>
				<div className="col-sm-7">
					<input type='text' name='name' value={this.state.name} onChange={this.handleChange} className='form-control' />
				</div>
				<div className='col-sm-2'>
					<i className='fa fa-check text-success mx-1 hand' onClick={this.handleUpdate}></i>
					<i className='fa fa-times text-secondary mx-2 hand'></i>
				</div>
			</div>
		]
	}

	render() {
		if (this.state.editMode) {
			return this.renderForm()			
		} else {
			return this.renderList()
		}
		// return (
		// 	<button onClick={this.handleEdit}>
		// 		{this.state.editMode ? 'ON' : 'OFF'}
		// 	</button>
		// )
	}
}
export default Area;