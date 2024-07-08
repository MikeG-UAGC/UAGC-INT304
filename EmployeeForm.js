import React, { Component } from 'react';
import './EmployeeForm.css';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', email: '' };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email } = this.state;
    if (firstName && lastName && email) {
      const newEmployee = { firstName, lastName, email };
      this.props.addEmployee(newEmployee);
      this.setState({ firstName: '', lastName: '', email: '' }); // Reset form fields
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.onChange} 
          />
        </label>
        <br />
        <label>
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.onChange} 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.onChange} 
          />
        </label>
        <br />
        <button type="submit">Add Employee</button>
        <button type="button" onClick={this.props.saveData}>Save Data</button>
      </form>
    );
  }
}

export default EmployeeForm;
