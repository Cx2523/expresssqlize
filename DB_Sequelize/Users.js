const bcrypt = require('bcrypt');
const User = require('../models/index').User;
const Exercise = require('../models/index').Exercise;
const Workout = require('../models/index').Workout;
const Set = require('../models/index').Set;

///////// USER methods ////////////////////////
function findUserByUsername(username){
    return User.findAll({
        where: {
            Username: username
        },
        include: [ Exercise, {model: Workout, include: [Set]}]
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

module.exports = {
    findUserByUsername,
    createNewUser
}