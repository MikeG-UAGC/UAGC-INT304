import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';
import './Components/EmployeeForm.css';

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
        <div className="container">
          <header>Employee Management</header>
          <Routes>
            <Route path="/" element={
              <div>
                <div className="employee-form-container">
                  <EmployeeForm addEmployee={this.addEmployee} saveData={this.saveData} />
                </div>
                <div className="employee-list-container">
                  <EmployeeList employees={this.state.employees} />
                </div>
              </div>
            } />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
