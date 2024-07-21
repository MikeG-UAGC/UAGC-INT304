import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';

class App extends Component {
  constructor(props) {
    super(props);
    const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    this.state = {
      employees: savedEmployees
    };
  }

  addEmployee = (employee) => {
    this.setState((prevState) => {
      const updatedEmployees = [...prevState.employees, employee];
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      return { employees: updatedEmployees };
    });
  };

  saveData = () => {
    localStorage.setItem('employees', JSON.stringify(this.state.employees));
    console.log('Employees data saved to local storage:', this.state.employees);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Employee Management</h1>
          <Routes>
            <Route path="/" element={
              <div>
                <EmployeeForm addEmployee={this.addEmployee} saveData={this.saveData} />
                <EmployeeList employees={this.state.employees} />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
