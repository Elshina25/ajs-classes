import Magician from '../js/Magician';

test('create personage', () => {
  const magician = new Magician('personage', 'Magician');
  expect(magician).toEqual({
    name: 'personage',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
