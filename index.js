const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const dbOp = require('./sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('./models').sequelize;

const PORT = process.env.PORT || 3333;

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
    dbOp.findUserByUsername(username);
});


passport.use(new LocalStrategy((username, password, done) => {
    dbOp.findUserByUsername(username).then(user => {
        if (!user[0]) {
            return done('User does not exist', null);
        } else {
            bcrypt.compare(password, user[0].dataValues.Password, (err, res) => {
                if (res) {
                    return done(null, user[0].dataValues);
                } else {
                    return done('Invalid Credentials', null);
                }
            })
        }
    });
}));

/////////// Register API ///////////////////
app.post('/register', (req, res) => {
    dbOp.createNewUser(req.body);
});


/////////// Login API ///////////////////
app.get('/login', (req, res) => {
    res.sendFile('login.html', {root: __dirname});
});

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/error'}),
    (req, res) => res.redirect('/api')
);

app.get('/error', (req, res) => res.send("error logging in"));

//////////// Exercise Data API /////////////////////////
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