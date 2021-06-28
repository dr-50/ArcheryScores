const User = require('./user');
const Bow = require('./bow');
const Scores = require('./scores.js');


// create associations
User.hasMany(Bow, {
    foreignKey: 'userid'
});

Bow.belongsTo(User, {
    foreignKey: 'id',
    onDelete: 'SET NULL'
});

User.hasMany(Scores, {
    foreignKey: 'userid'
});

Scores.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = { User, Bow, Scores };