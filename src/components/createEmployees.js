import {Link} from 'react-router-dom';
import React, {Component} from 'react';
class CreateEmployees extends Component{
	
	state = {
		id: null,
		name: "",
		salary: null,
		branchId: null
	}

	setId = (event) => {
		this.setState({id: event.target.value});
	}

	setName = (event) => {
		this.setState({name: event.target.value});
	}

	setSalary = (event) => {
		this.setState({salary: event.target.value});
	}

	setBranchId = (event) => {
		this.setState({branchId: event.target.value});
	}

	SubmitHandler = () => {
		fetch("http://localhost:8080/createEmployee", {
			method: "POST",
			body: JSON.stringify({
				employeeId: this.state.id,
				name: this.state.name,
				salary: this.state.salary,
				branchID: this.state.branchId
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
			<div className="newEmployee">
				<h4> Fill Out the following information to add a new Employee </h4>
				<form onSubmit={this.SubmitHandler}>
					<p> Enter Employee Id: </p>
					<input
						type='number'
						name='id'
						onChange={this.setId}
					/>

					<p> Enter Employee Name: </p>
					<input
						type='text'
						name='name'
						onChange={this.setName}
					/>

					<p> Enter Employee Salary: </p>
					<input
						type='number'
						name='salary'
						onChange={this.setSalary}	
					/>

					<p> Enter Employee Branch Id </p>
						<input
							type='number'
							name='branchId'
							onChange={this.setBranchId}
						/>

					<input
						type='submit'
					/>			
				</form>		
				<Link to="/getEmployes">Back</Link>
			</div>
			);
		}
}

export default CreateEmployees;