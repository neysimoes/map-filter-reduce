const { getUsers } = require('./index');

test('getUsers', () => {
	expect(getUsers()[0].name).toBe('Franklin Madden');
})