import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './react-pages/Home.jsx';
import Signup from './react-pages/Signup.jsx';

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/signup" component={Signup} />
            </div>
        </Router>
    )
}

export default App;