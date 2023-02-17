const { User } = require('../models');

const userData = [
    {
        username: 'Zak',
        password: 'rootpass2023'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;