const Sequelize = require('sequelize');
const sequelize = new Sequelize('Test2', 'postgres', 'password', {
    dialect: 'postgres'
});

const Exercise = sequelize.define('exercise', {
    Name: Sequelize.STRING,
    Description: Sequelize.TEXT, 
    Category: Sequelize.ENUM('Aerobic', 'Anaerobic', 'Flexibility', 'Stability'),
    Metric1: Sequelize.ENUM('Weight', 'Reps', 'Time'),
    Metric2: Sequelize.ENUM('Weight', 'Reps', 'Time')
});

Exercise.sync();

function getAllExercises() {
    return Exercise.findAll().then(exercise => {
        return exercise;
    });
}

function createNewExercise(newExercise) {
    return Exercise.create({
        Name: newExercise.Name,
        Description: newExercise.Description,
        Category: newExercise.Category,
        Metric1: newExercise.Metric1,
        Metric2: newExercise.Metric2
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
    // updateExerciseById
}