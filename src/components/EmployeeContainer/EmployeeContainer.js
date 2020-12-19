import * as React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import "../css/styles.css";

// Style settings for DataGrid can be found at 
// https://material-ui.com/components/data-grid/getting-started/
// DataGrid is extension of materical-ui/core

// Columns to list user information, columns are left to right
// Data-Grid allows client to auto sort through columns alphabetically a-z and z-a

// setting columns to contain following information and description for user's to hover over 
let columns = [
    { field: "firstName", headerName: "First Name", width: 200, description: "Employee's First Name"},
    { field: "lastName", headerName: "Last Name", width: 200, description: "Employee's Last Name"},
    { field: "userName", headerName: "User Name", width: 200, description: "Employee's User Name" },
    { field: "email", headerName: "E-mail", width: 300, description: "Employee's Email" },
    { field: "cell", headerName: "Phone Number", width: 200, description: "Employee's Cell" },
];
// Function to run information needed to page, form is in the API call 
// https://randomuser.me/api/?results=20&nat=us


// employee id is not being rendered, even tho not being rendered still needed due to 
// not being able to be set up without an index # for reference
export default function employeeList ({ props }) {
    let employeeList = props.map((employee, i) => {
        let employeeInformation = {};
        // DO NOT DELETE
        employeeInformation.id = i + 1;
        employeeInformation.userName = employee.login.username;
        employeeInformation.firstName = employee.name.first;
        employeeInformation.lastName = employee.name.last;
        employeeInformation.email = employee.email;
        employeeInformation.cell = employee.cell;
        return employeeInformation;
    })
    return (
// Forcing styling due to DataGrid's set up
            <div className="searchStyle" style={{ width: "60%", margin: "auto"}}>
                <DataGrid rows={employeeList} columns={columns} autoHeight />
            </div>

    );
}