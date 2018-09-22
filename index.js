const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

const bcrypt = require('bcrypt');
const sequelize = require('./models').sequelize;

const PORT = process.env.PORT || 3333;

const dbUserOps = require('./DB_Sequelize/Users');
const dbExerciseOps = require('./DB_Sequelize/Exercises');
const dbWorkoutOps = require('./DB_Sequelize/Workouts');
const dbSetOps = require('./DB_Sequelize/Sets');

app.use(passport.initialize());
app.use(passport.session());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public/dist')); 

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});



passport.serializeUser((user, done) => {
    done(null, user.Username);
});
passport.deserializeUser((username, done) => {
    dbUserOps.findUserByUsername(username);
});


passport.use(new LocalStrategy((username, password, done) => {
    dbUserOps.findUserByUsername(username).then(user => {
        if (!user[0]) {
            return done(null, false, {message: 'Incorrect Username'} );
        } else {
            bcrypt.compare(password, user[0].dataValues.Password, (err, res) => {
                if (res) {
                    return done(null, user[0].dataValues);
                } else {
                    return done(null, false, {message: 'Incorrect Password'});
                }
            })
        }
    });
}));

/////////// Register API ///////////////////
app.post('/register', (req, res) => {
    // res.send("TEST Register end point");
    dbUserOps.createNewUser(req.body)
        .then(() => {
            console.log('TEST', req.body.username);
            dbUserOps.findUserByUsername(req.body.username)
                .then(result => {
                    console.log('result of find', result);
                    res.send(result)
                });
    });
});

/////////// Login API ///////////////////
app.post('/login',
    passport.authenticate('local', {failureRedirect: '/error'}),
    (req, res) => res.send(res.req.user)
);

app.get('/error', (req, res) => {
    // res.set('Content-Type', 'application/json');
    return res.send(req.authInfo);
});

//////////// Exercise Data API /////////////////////////
app.get('/exercise', (req, res) => {
    dbExerciseOps.getAllExercises()
        .then(result => res.send(result));
});

app.get('/exercise/:id', (req, res) => {
    dbExerciseOps.getExerciseById(req.params.id)
        .then(result => res.send(result));
});

app.post('/exercise', (req, res) => {
    dbExerciseOps.createNewExercise(req.body)
        .then((createdExercise) => res.send(createdExercise));
});

app.put('/exercise/:id', (req, res) => {
    dbExerciseOps.updateExerciseById(req.params.id, req.body)
        .then((updatedExercise) => res.send(updatedExercise));
});

app.delete('/exercise/:id', (req, res) => {
    dbExerciseOps.deleteExerciseById(req.params.id)
        .then(() => res.send('Exercise Deleted'));
});

///////// Workout Data API ////////////////////////////
app.get('/workout', (req, res) => {
    dbWorkoutOps.getAllWorkouts()
        .then(result => res.send(result));
});

app.get('/workout/:id', (req, res) => {
    dbWorkoutOps.getWorkoutById(req.params.id)
        .then(result => res.send(result));
});

app.post('/workout', (req, res) => {
    dbWorkoutOps.createNewWorkout(req.body)
        .then((createdWorkout) => res.send(createdWorkout));
});

app.put('/workout/:id', (req, res) => {
    dbWorkoutOps.updateWorkoutById(req.params.id, req.body)
        .then((updatedWorkout) => res.send(updatedWorkout));
});

app.delete('/workout/:id', (req, res) => {
    dbWorkoutOps.deleteWorkoutById(req.params.id)
        .then(() => res.send('Workout Deleted'));
});

///////// Set Data API ////////////////////////////
app.get('/set', (req, res) => {
    dbSetOps.getAllSets()
        .then(result => res.send(result));
});

app.get('/set/:id', (req, res) => {
    dbSetOps.getSetById(req.params.id)
        .then(result => res.send(result));
});

app.post('/set', (req, res) => {
    dbSetOps.createNewSet(req.body)
        .then((createdSet) => res.send(createdSet));
});

app.put('/set/:id', (req, res) => {
    dbSetOps.updateSetById(req.params.id, req.body)
        .then((updatedSet) => res.send(updatedSet));
});

app.delete('/set/:id', (req, res) => {
    dbSetOps.deleteSetById(req.params.id)
        .then(() => res.send('Set Deleted'));
});