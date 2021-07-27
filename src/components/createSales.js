import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreateSales extends Component{
	state = {
		client: null,
		employeeId: null,
		sales: null
	}

	setClient = (event) => {
		this.setState({client: event.target.value});
	}

	setEmployee = (event) => {
		this.setState({employeeId: event.target.value});
	}

	setSales = (event) => {
		this.setState({sales: event.target.value});
	}

	SubmitHandler = () => {
		fetch("http://localhost:8080/createSales", {
			method: "POST",
			body: JSON.stringify({
				client: this.state.client,
				employeeId: this.state.employeeId,
				sales: this.state.sales
			}),

			headers: {
				"Content-type": "application/json; charset=UTF-8"				
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error));
	}

	render(){
		return(
			<div>
				<form onSubmit={this.SubmitHandler}>
					<p> Enter Client Name: </p>
					<input
						type='text'
						onChange={this.setClient}
						/>

					<p> Enter Employee Id: </p>
					<input
						type='number'
						onChange={this.setEmployee}	
						/>

					<p> Enter Sales Amount: </p>
					<input
						type='number'
						onChange={this.setSales}
						/>	

					<input
						type='submit'
						/>	
				</form>
				<Link to="/getSales"> <button> Back </button> </Link>
			</div>
			);
	}
}
export default CreateSales