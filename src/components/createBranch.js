import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreateBranch extends Component {

	state = {
		branchId: null,
		branchName: "",
		branchManagerId: null
	}

	setId = (event) => {
		this.setState({branchId: event.target.value});
	}

	setName = (event) => {
		this.setState({branchName: event.target.value});
	}

	setManager = (event) => {
		this.setState({branchManagerId: event.target.value});
	}

	SubmitHandler = () => {
		fetch("http://localhost:8080/createBranch", {
			method: "POST",
			body: JSON.stringify({
				branchId: this.state.branchId,
				branchName: this.state.branchName,
				managerId: this.state.branchManagerId
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
				<div className="addBranch">
					<h4> Fill out the following information to create a new Branch. </h4>

					<form onSubmit={this.SubmitHandler}>
						<p> Enter Branch Id: </p>
						<input
							type='number'
							onChange={this.setId}
						/>

						<p> Enter Branch Name: </p>
						<input
							type='text'
							onChange={this.setName}
						/>

						<p> Enter Manager Id: </p>
						<input
							type='number'
							onChange={this.setManager}
						/>

						<input
							type='submit'
						/>
								
					</form>

					<Link to="/getBranch" > <button> Back </button> </Link>
				</div>
			);
	}
}

export default CreateBranch