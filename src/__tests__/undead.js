import Undead from '../js/Undead';

test('create personage', () => {
  const undead = new Undead('personage', 'Undead');
  expect(undead).toEqual({
    name: 'personage',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
