import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class UpdateEmployee extends Component {
	
	state={
		name: "",
		salary: null,
		branchID: null,
		redirect: false
	}

	componentDidMount = () => {
		this.setState({name: this.props.match.params.name, salary: this.props.match.params.salary, 
			branchID: this.props.match.params.branch});
	}

	setName = (event) => {
		this.setState({name: event.target.value});
	}

	setSalary = (event) => {
		this.setState({salary: event.target.value});
	}

	setBranch = (event) => {
		this.setState({branchID: event.target.value});
	}

	submitHandler = () => {
		fetch("http://localhost:8080/updateEmployee", {
			method: "PUT",
			body: JSON.stringify({
				employeeId: this.props.match.params.id,
				name: this.state.name,
				salary: this.state.salary,
				branchID: this.state.branchID
			}),

			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error));

		//this.props.location.data.getEmployees();
		this.setState({redirect: true});
	}

	render(){
		if(this.state.redirect){
			return <Redirect push to="/getEmployes" />;
		}
		return(
			<div className="updateEmployee">
				<form>
					

					<p> Enter Changed Name: </p>
					<input
						type='text'
						onChange={this.setName}
					/>

					<p> Enter New Salary </p>
					<input
						type='number'
						onChange={this.setSalary}
					/>
					
					<p> Enter new Branch</p>
					<input
						type='number'
						onChange={this.setBranch}
					/>

					<button type='button' onClick={this.submitHandler}> Submit </button>

				</form>
				<Link to="/getEmployes">Back</Link>

			</div>
			);
	}
}

export default UpdateEmployee