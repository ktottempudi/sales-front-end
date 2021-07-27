import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet/employees.css';
class Employees extends Component {

	state = {
		employees: []
	}

	componentDidMount = () => {
		this.isMount = true;
		//this.getEmployees();
		fetch("http://localhost:8080/getEmployes")
		.then(response =>  response.json())
		.then(restData => {
			this.setState({employees: restData});
		});		
	}

	/*getEmployees = () => {
		/*fetch("http://localhost:8080/getEmployes")
		.then(response =>  response.json())
		.then(restData => {
			this.setState({employees: restData});
		});	*/
		/*this.setState(() => {

		}, () => {
			fetch("http://localhost:8000/getEmployees")
			.then(response => response.json())
			.then(data => {
				this.setState({employees: data});
			});
		});	
	}*/

	componentDidUpdate(){
		fetch("http://localhost:8080/getEmployes")
		.then(response =>  response.json())
		.then(restData => {
			this.setState({employees: restData});
		});			
	}

	deleteEmployee = (id) => {
		fetch("http://localhost:8080/deleteEmployee/"+id, {
			method: "DELETE"
		})
		.then(response => response.json())
		.then(data => {
			this.setState({employees: data});
		});

	}

	componentWillUnmout(){
		this.isMount = false;
	}

	render(){
		return(

			<div>

			<Link id="add" to={"/createEmployee"}> <button> Create Employee </button> </Link>
			
			<table className="getInfo">
				<thead>
					<tr>
						<td> Employee Id </td>
						<td> Name </td>
						<td> Salary </td>
						<td> Branch Id </td>
						<td> Actions </td>
					</tr>
				</thead>	
				<tbody>
					{
						this.state.employees.map(
							employee => 
							<tr key = {employee.employeeId}>
								<td> {employee.employeeId} </td>
								<td> {employee.name} </td>
								<td> {employee.salary} </td>
								<td> {employee.branchID} </td>
								<td> <Link to={{
									pathname: "/updateEmployee/"+employee.employeeId+"/"+employee.name+"/"+employee.salary+"/"+employee.branchID,
								}}> 
								<button> Edit </button> </Link>
									 <button onClick={() => {this.deleteEmployee(employee.employeeId)}}> Delete </button>
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
export default Employees;