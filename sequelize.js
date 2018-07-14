const bcrypt = require('bcrypt');
const User = require('./models/index').User;
const Exercise = require('./models/index').Exercise;

///////// USER methods ////////////////////////
function findUserByUsername(username){
    return User.findAll({
        where: {
            Username: username
        },
        include: [ Exercise ]
    });
}

async function createNewUser(newUser) {
    await bcrypt.genSalt(10, (err, salt) => {
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
        Metric2: newExercise.metric2,
        UserId: newExercise.UserId
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