const express = require('express');
const bodyParser = require('body-parser');

// const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
 
const app = express();
const PORT = process.env.PORT || 3333;

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.static('./public/dist'));   
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

const dbOp = require('./sequelize');

app.get('/api', (req, res) => {
    dbOp.getAllExercises().then(result => res.send(result));
});

app.get('/api/:id', (req, res) => {
    dbOp.getExerciseById(req.params.id).then(result => res.send(result));
});

app.post('/api', (req, res) => {
    console.log(req.body)
    dbOp.createNewExercise(req.body).then(() => res.send('Exercise inserted.'));
});

app.delete('/api/:id', (req, res) => {
    dbOp.deleteExerciseById(req.params.id).then(() => res.send('Exercise Deleted'));
});