const Set = require('../models/index').Set;

////////// EXERCISE methods //////////////////////
function getAllSets() {
    return Set.findAll().then(set => {
        return set;
    });
}

function createNewSet(newSet) {
    return Set.create({
        Weight: newSet.weight,
        Reps: newSet.reps,
        Time: newSet.time,
        WorkoutId: newSet.WorkoutId,
        ExerciseId: newSet.ExerciseId
    });
}

function deleteSetById(id) {
    return Set.destroy({
        where: {
            id: id
        }
    });
}

function getSetById(id) {
    return Set.findById(id);
}

function updateSetById(id, updatedSet) {
    return Set.update({
        Weight: updatedSet.weight,
        Reps: updatedSet.reps,
        Time: updatedSet.time,
        WorkoutId: updatedSet.WorkoutId,
        ExerciseId: updatedSet.ExerciseId
    }, {
        returning: true,
        where: {
          id: id
        }
      });
}

module.exports = {
    getAllSets,
    createNewSet,
    deleteSetById,
    getSetById,
    updateSetById
}