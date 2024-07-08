import React, { Component } from 'react';
import EmployeeForm from './Components/EmployeeForm'; // Adjust the path based on your file structure

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
      <div className="App">
        <h1>Employee Form</h1>
        <EmployeeForm addEmployee={this.addEmployee} saveData={this.saveData} />
      </div>
    );
  }
}

export default App;
