const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3333;
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

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