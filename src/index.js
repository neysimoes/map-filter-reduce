var users = require('./data/users') // generate with JSON Generator
var states = require('./data/states') // https://github.com/magnobiet/states-cities-brazil
var cities = require('./data/cities') // https://github.com/magnobiet/states-cities-brazil

function getUsers() {
	return users;
}

module.exports = {
	getUsers
};
