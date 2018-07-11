const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://kgtfismiynzrxf:4f22dc87eb9927facb8549f117537c0b23372fa523efdd4221164f99fd193b19@ec2-54-83-12-150.compute-1.amazonaws.com:5432/d8lcap72j8drek', {
//     dialect: 'postgres'
// });
const bcrypt = require('bcrypt');

const db = new Sequelize('Test2', 'postgres', 'password', {
    dialect: 'postgres'
})

const Exercise = db.define('exercise', {
    Name: Sequelize.STRING,
    Description: Sequelize.TEXT, 
    Category: Sequelize.ENUM('Aerobic', 'Anaerobic', 'Flexibility', 'Stability'),
    Metric1: Sequelize.ENUM('Weight', 'Reps', 'Time'),
    Metric2: Sequelize.ENUM('Weight', 'Reps', 'Time')
});

const User = db.define('user', {
    Username: Sequelize.STRING,
    Password: Sequelize.STRING
});

// User.sync();

//Exercise.sync();
// User.create({
//     Username: 'testname',
//     Password: 'testpw'
// });


///////// USER methods ////////////////////////
function findUserByUsername(username){
    return User.findAll({
        where: {
            Username: username
        }
    });
}

function createNewUser(newUser) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            return User.create({
                Username: newUser.username,
                Password: hash
            });
        });
    });
}

////////// EXERCISE methods //////////////////////
function getAllExercises() {
    return Exercise.findAll().then(exercise => {
        return exercise;
    });
}

function createNewExercise(newExercise) {
    return Exercise.create({
        Name: newExercise.name,
        Description: newExercise.description,
        Category: newExercise.category,
        Metric1: newExercise.metric1,
        Metric2: newExercise.metric2
    });
}

function deleteExerciseById(id) {
    return Exercise.destroy({
        where: {
            id: id
        }
    });
}

function getExerciseById(id) {
    return Exercise.findById(id);
}


module.exports = {
    getAllExercises,
    createNewExercise,
    deleteExerciseById,
    getExerciseById,
    findUserByUsername,
    createNewUser
    // updateExerciseById
}