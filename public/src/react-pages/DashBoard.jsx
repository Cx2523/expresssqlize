import React from 'react';

const DashBoard = (props) => {
    return (
        <div>
            <h1>This is the DashBoard Page</h1>
            <h3>All your stuff: </h3>
            {props.location.state.data}
        </div>
    );
}

export default DashBoard;