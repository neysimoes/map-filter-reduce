const {
  getUsers,
  stateWithUF,
  filterUsersWithNewsletter,
  getUsersEmailList,
  getAllUsersEmailList,
  getState,
  getCitiesWithState,
  getUsersSumAge,
  objectStates } = require('./index');

test('getUsers', () => {
	expect(getUsers()[0].givenName).toBe('Autumn');
})

test('stateWithUF', function() {
  expect(stateWithUF()[0]).toEqual({
    uf: 'RO',
    id: 11,
    name: "Rondônia"
  });
})

test('filterUsersWithNewsletter', function() {
  var usersNewsletter = filterUsersWithNewsletter();
  expect(usersNewsletter[0]._id).toBe('5a64bbc72f1312aab9adf6b2');
})


test('getUsersEmailList', function() {
  var emailsList = getUsersEmailList();
  expect(emailsList[0]).toBe('tamra.preston@anocha.net');
})


test('getAllUsersEmailList', function() {
  var emailsList = getAllUsersEmailList();
  expect(emailsList[0]).toBe('autumn.fry@boilicon.co.uk');
})

test('getState', function() {
  var rioDeJaneiro = getState('RJ');
  expect(rioDeJaneiro).toEqual({
    "id": 33,
    "name": "Rio de Janeiro",
    "abbr": "RJ"
  })
})


test('getCitiesWithState', function() {
  var rjCities = getCitiesWithState('RJ');
  expect(rjCities[0].name).toEqual('Angra dos Reis');
})


test('getUsersSumAge', function() {
  var usersSumAge = getUsersSumAge();
  console.log(usersSumAge);
})


test('objectStates', function() {
  var states = objectStates()
  console.log(states);
})
