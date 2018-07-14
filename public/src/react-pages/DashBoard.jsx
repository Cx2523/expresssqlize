import React from 'react';
import { Table } from '../../../node_modules/@material-ui/core';

const DashBoard = (props) => {
    const userData = JSON.parse(props.location.state.userdata);
    console.log(userData);
    return (
        <div>
            <h1>Hello {userData.Username}</h1>
            <table>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Metric1</th>
                <th>Metric2</th>
                { userData.Exercises.map(exercise => 
                    <tr>
                        <td>{exercise.Name}</td>
                        <td>{exercise.Description}</td>
                        <td>{exercise.Category}</td>
                        <td>{exercise.Metric1}</td>
                        <td>{exercise.Metric2}</td>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default DashBoard;