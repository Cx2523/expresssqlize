import React from 'react';

const Signup = () => {
    return (
        <div>
            <h1>This is the Signup Page</h1>
            <form action="/register" method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" />
                    <br />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                    <br />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Signup;