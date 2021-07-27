import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet/employees.css';

class Sales extends Component {
	state = {
		sales: []
	}

	componentDidMount(){
		//this.isMounted = true;
		fetch("http://localhost:8080/getSales")
		.then(response => response.json())
		.then(data => {
			this.setState({sales: data});
		});
	}

	componentDidUpdate(){
		fetch("http://localhost:8080/getSales")
		.then(response => response.json())
		.then(data => {
			this.setState({sales: data});
		});
	}

	deleteSales = (client) => {
		fetch("http://localhost:8080/deleteSales/" + client, {
			method: "DELETE"
		})
		.then(response => response.json())
		.then(data => {
			this.setState({sales: data});
		});
	}

	/*componentWillUnmount(){
		this.isMounted = false;
	}*/

	render(){
		return(
			<div className="Sales">
				<Link to="/createSales"> <button> Create Sale </button> </Link>
				<table className="getInfo">
					<thead>
						<tr>
							<td> Client </td>
							<td> Employee Id </td>
							<td> Sales </td>
							<td> Actions </td>
						</tr>
					</thead>

					<tbody>
						{
							this.state.sales.map(
								sale =>
								<tr key= {sale.client}>
									<td> {sale.client} </td>
									<td> {sale.employeeId} </td>
									<td> {sale.sales} </td>
									<td> <Link to={{
										pathname: "/updateSales/" + sale.client + "/" + sale.employeeId + "/" + sale.sales}}> 
										<button> Edit </button> </Link>
										 <button onClick={() => {this.deleteSales(sale.client)}}> Delete </button>
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

export default Sales