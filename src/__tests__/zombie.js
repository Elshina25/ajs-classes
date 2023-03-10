import Zombie from '../js/Zombie';

test('create personage', () => {
  const zombie = new Zombie('personage', 'Zombie');
  expect(zombie).toEqual({
    name: 'personage',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
