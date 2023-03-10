import Swordsman from '../js/Swordsman';

test('create personage', () => {
  const swordsman = new Swordsman('personage', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'personage',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
