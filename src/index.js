var users = require('./data/users') // generate with JSON Generator
var states = require('./data/states') // https://github.com/magnobiet/states-cities-brazil
var cities = require('./data/cities') // https://github.com/magnobiet/states-cities-brazil

function getUsers() {
	return users;
}

function stateWithUF() {
  return states.map(function(state) {
    return {
      uf: state.abbr,
      name: state.name,
      id: state.id
    }
  })
}

function filterUsersWithNewsletter() {
  return users.filter(function(user) {
    return user.newsletter === true;
  })
}

function getUsersEmailList() {
  return filterUsersWithNewsletter()
    .map(function(user) {
      return user.email;
    })
}

function getAllUsersEmailList() {
  return users.map(function(user) {
      return user.email;
    })
}

function getState(uf) {
  return states.find(function(state) {
    return state.abbr === uf;
  })
}

function getCitiesWithState(uf) {
  var state = getState(uf);
  return cities.filter(function(city) {
    return city.state_id === state.id;
  })
}

function getUsersSumAge() {
  return users.reduce(function(acc, user) {
    return acc + user.age;
  }, 0)
}

function objectStates() {
  return states.reduce(function(acc, state) {
    acc[state.id] = {
      name: state.name,
      uf: state.abbr
    }
    return acc;
  }, {})
}

module.exports = {
	getUsers,
  stateWithUF,
  filterUsersWithNewsletter,
  getUsersEmailList,
  getAllUsersEmailList,
  getState,
  getCitiesWithState,
  getUsersSumAge,
  objectStates
};
