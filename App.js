import React, { Component } from 'react';
import EmployeeForm from './Components/EmployeeForm'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Employee Form</h1>
        <EmployeeForm />
      </div>
    );
  }
}

export default App;
