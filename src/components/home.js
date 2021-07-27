import {Link} from 'react-router-dom';
import '../stylesheet/home.css';
function Home(){
	return(
		<div>
			<p> Sales office </p>
			<table className="pages">
				<thead>
					<tr>
						<td> Pages </td>
						<td> Page Information </td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td> <Link to="/getEmployes"> <button> Employees </button> </Link> </td>
						<td> This button will take you the the Employees page where you can view all of the current
								employees, add a new employee, update employee information, or delete an employee. </td>
					</tr>

					<tr>
						<td> <Link to="/getBranch"> <button> Branch </button> </Link> </td>
						<td> This button will take you to the Branch page where you can view all of the current branches,
							add a new branch, update the branch information, or delete a branch. </td>
					</tr>

					<tr>
						<td> <Link to="/getSales"> <button> Sales </button> </Link> </td>
						<td> This buttonw will take you the to the Sales page where you can view all of the current sales,
							add a new sale, update sales information, or delete a sale. </td>
					</tr>

				</tbody>
			</table>	
		</div>	
		);
}

export default Home;