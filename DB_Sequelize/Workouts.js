const Workout = require('../models/index').Workout;

////////// EXERCISE methods //////////////////////
function getAllWorkouts() {
    return Workout.findAll().then(workout => {
        return workout;
    });
}

function createNewWorkout(newWorkout) {
    return Workout.create({
        Name: newWorkout.name,
        Description: newWorkout.description,
        StartTime: newWorkout.startTime,
        EndTime: newWorkout.endTime,
        UserId: newWorkout.UserId
    });
}

function deleteWorkoutById(id) {
    return Workout.destroy({
        where: {
            id: id
        }
    });
}

function getWorkoutById(id) {
    return Workout.findById(id);
}

function updateWorkoutById(id, updatedWorkout) {
    return Workout.update({
        Name: updatedWorkout.name,
        Description: updatedWorkout.description,
        StartTime: updatedWorkout.startTime,
        EndTime: updatedWorkout.endTime
    }, {
        returning: true,
        where: {
          id: id
        }
      });
}

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    deleteWorkoutById,
    getWorkoutById,
    updateWorkoutById
}