//import logo from './logo.svg';
import './App.css';
import Employees from './components/employees';
import CreateEmployees from './components/createEmployees';
import UpdateEmployee from './components/updateEmployee';
import Home from './components/home';
import Branch from './components/branch';
import CreateBranch from './components/createBranch';
import UpdateBranch from './components/updateBranch'
import Sales from './components/sales';
import CreateSales from './components/createSales';
import UpdateSales from './components/updateSales';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">

      <Route exact path="/" component={Home} />
      <Route exact path="/getEmployes" component={Employees}/>
      <Route exact path="/createEmployee" component={CreateEmployees}/>
      <Route exact path="/updateEmployee/:id/:name/:salary/:branch" component={UpdateEmployee}/>
      <Route exact path="/getBranch" component={Branch} />
      <Route exact path="/createBranch" component={CreateBranch} />
      <Route exact path="/updateBranch/:id/:name/:manager" component={UpdateBranch} />
      <Route exact path="/getSales" component={Sales} />
      <Route exact path="/createSales" component={CreateSales} />
      <Route exact path="/updateSales/:client/:id/:sales" component={UpdateSales}/>
    </div>
    </Router>
  );
}

export default App;
