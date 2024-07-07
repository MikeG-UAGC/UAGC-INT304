import React from 'react';
import './EmployeeForm.css';


class EmployeeForm extends
React.Component {
constructor(props) {
super(props);
this.state = {name: '', email: '', title: '',
department: ''};
}

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with state:', this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;

