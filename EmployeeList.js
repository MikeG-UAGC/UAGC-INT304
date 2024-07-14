import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeForm.css'; // Adjust the path based on your file structure

// A functional component for displaying a list of employees
function EmployeeList(props) {
  // Render the employee list
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee, index) => (
          <li key={index} className="employee-item">
            {/* Create a link to the employee detail page */}
            <Link to={`/employees/${index}`} className="employee-link">
              {employee.firstName} {employee.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
