const Exercise = require('../models/index').Exercise;

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
        Weight: newExercise.weight,
        Reps: newExercise.reps,
        Time: newExercise.time,
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

function updateExerciseById(id, updatedExercise) {
    return Exercise.update({
        Name: updatedExercise.name,
        Description: updatedExercise.description,
        Category: updatedExercise.category,
        Weight: updatedExercise.weight,
        Reps: updatedExercise.reps,
        Time: updatedExercise.time
      }, {
        returning: true,
        where: {
          id: id
        }
      });
}

module.exports = {
    getAllExercises,
    createNewExercise,
    deleteExerciseById,
    getExerciseById,
    updateExerciseById
}