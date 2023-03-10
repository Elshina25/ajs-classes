import Bowman from '../js/Bowman';

test('create personage', () => {
  const bowman = new Bowman('personage', 'Bowman');
  expect(bowman).toEqual({
    name: 'personage',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});


