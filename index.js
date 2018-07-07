const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(3333, () => console.log('listening on port 3333'));

const dbOp = require('./sequelize');

app.get('/', (req, res) => {
    dbOp.getAllExercises().then(result => res.send(result));
});

app.get('/:id', (req, res) => {
    dbOp.getExerciseById(req.params.id).then(result => res.send(result));
});

app.post('/', (req, res) => {
    dbOp.createNewExercise(req.body).then(() => res.send('Exercise inserted.'));
});

app.delete('/:id', (req, res) => {
    dbOp.deleteExerciseById(req.params.id).then(() => res.send('Exercise Deleted'));
});