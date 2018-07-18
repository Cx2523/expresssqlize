import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import * as request from 'superagent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DashBoard from './DashBoard.jsx';
import { Route } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        request.post('/register')
            .set('Content-Type', 'application/json')
            .send(this.state)
            .then(res => {
                this.props.history.push({ 
                    pathname: "/dashboard",
                    state: { userdata: JSON.stringify(res.body) }
                });
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <h1>Signup</h1>
                <Grid>
                    <Grid item>
                        <TextField
                            id="username"
                            label="Username"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
               
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </form>
        );
    }
}

export default Signup;