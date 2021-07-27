import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class UpdateSales extends Component{
	state = {
		employeeId: null,
		sales: null,
		redirect: false
	}

	componentDidMount(){
		this.setState({employeeId: this.props.match.params.id,
			sales: this.props.match.params.sales});
	}

	setEmployee = (event) => {
		this.setState({employeeId: event.target.value});
	}

	setSales = (event) => {
		this.setState({sales: event.target.value});
	}

	SubmitHandler = () => {
		fetch("http://localhost:8080/updateSales", {
			method: "PUT",

			body: JSON.stringify({
				client: this.props.match.params.client,
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

		this.setState({redirect: true});
	}

	render(){
		if(this.state.redirect){
			return <Redirect push to="/getSales" />;
		}
		return(
			<div>
				<form>
					<p> Enter Employee Id </p>
					<input
						type='number'
						onChange={this.setEmployee}
						/>

					<p> Enter Sales </p>
					<input
						type='number'
						onChange={this.setSales}
						/>

					<button type='button' onClick={this.SubmitHandler}> Submit </button>	
				</form>
				<Link to="/getSales"> <button> Back </button> </Link>
			</div>
			);
	}

}
export default UpdateSales