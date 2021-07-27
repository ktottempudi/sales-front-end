import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet/employees.css';

class Branch extends Component{
	state = {
		branches: []
	}

	componentDidMount(){
		//this.getBranch();
		this.isMount = true;

		fetch("http://localhost:8080/getBranch")
		.then(response =>  response.json())
		.then(restData => {
			this.setState({branches: restData});
		});		
	}

	/*getBranch = () => {
		fetch("http://localhost:8080/getBranch")
		.then(response =>  response.json())
		.then(restData => {
			this.setState({branches: restData});
		});
	}*/

	deleteBranch = (id) => {
		fetch("http://localhost:8080/deleteBranch/" + id, {
			method: "DELETE"
		})
		.then(response => response.json())
		.then(data => {
			this.setState({branches: data});
		});
	}

	componentDidUpdate(){
		fetch("http://localhost:8080/getBranch")
		.then(response =>  response.json())
		.then(restData => {
			this.setState({branches: restData});
		});		
	}

	componentWillUnmount(){
		this.isMount = false;
	}
	render(){
		return(
			<div>
				<Link to="/createBranch"> <button> Create Branch </button> </Link>
				<table className="getInfo">
					<thead>
						<tr>
							<td> Branch Id </td>
							<td> Branch Name </td>
							<td> Branch Manger Id </td>
							<td> Actions </td>
						</tr>
					</thead>

					<tbody>
						{
							this.state.branches.map(
								branch =>
								<tr key = {branch.branchId}>
									<td> {branch.branchId} </td>
									<td> {branch.branchName} </td>
									<td> {branch.managerId} </td>
									<td> <Link to={{
										pathname: "/updateBranch/" + branch.branchId + "/" + branch.branchName + "/" + branch.managerId}}> 
									<button> Edit </button> </Link>
										 <button onClick={() => {this.deleteBranch(branch.branchId)}}> Delete </button>
										 </td>
								</tr>
							)
						}
					</tbody>
				</table>

				<Link to="/"> <button> Back </button> </Link>

			</div>	
			);
	}
}

export default Branch;