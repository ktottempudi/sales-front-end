import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class UpdateBranch extends Component {

	state = {
		branchName: null,
		managerId: null,
		redirect: false
	}

	componentDidMount(){
		this.setState({branchName: this.props.match.params.name, 
			managerId: this.props.match.params.manager});
	}

	setBranchName = (event) => {
		this.setState({branchName: event.target.value});
	}

	setManager = (event) => {
		this.setState({managerId: event.target.value});
	}

	submitHandler = () => {
		fetch("http://localhost:8080/updateBranch", {
			method: "PUT",
			body: JSON.stringify({
				branchId: this.props.match.params.id,
				branchName: this.state.branchName,
				managerId: this.state.managerId
			}),

			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}

		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(error => console.log(error));

		this.setState({redirect: true});
	}

	render(){
		if(this.state.redirect){
			return <Redirect push to='/getBranch' />;
		}
		return(
			<div className="updateBranch">
				<form>
					<p> Enter Branch Name: </p>
					<input
						type='text'
						onChange={this.setBranchName}
					/>

					<p> Enter new Manager Id: </p>
					<input
						type='number'
						onChange={this.setManager}
					/>

					<button type='button' onClick={this.submitHandler}> Submit </button>
				</form>

				<Link to="/getBranch"> <button> Back </button> </Link>
			</div>


			);
	}


}

export default UpdateBranch