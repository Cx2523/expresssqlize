import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import * as request from 'superagent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class ExerciseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category: '',
            metric1: '',
            metric2: ''
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        request.post('/api')
            .set('Content-Type', 'application/json')
            .send(this.state)
            .then(res => console.log(res));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <Grid>
                    <Grid item>
                        <TextField
                            id="name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="category"
                            label="Category"
                            value={this.state.category}
                            onChange={this.handleChange('category')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item>
                        <TextField
                            id="metric1"
                            label="Metric1"
                            value={this.state.metric1}
                            onChange={this.handleChange('metric1')}
                            margin="normal"
                        />
                        <TextField
                            id="metric2"
                            label="Metric2"
                            value={this.state.metric2}
                            onChange={this.handleChange('metric2')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item>
                        <TextField
                            id="description"
                            label="Description"
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </form>
        );
    }
}

export default ExerciseForm;