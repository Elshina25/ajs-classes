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

test('less name symbols', () => {
  const bowman = new Bowman('a', 'Bowman');
  expect(bowman.name.length).toBeGreaterThan(1);
});

test('more name symbols', () => {
  const bowman = new Bowman('djdordmalscqr', 'Bowman');
  expect(bowman.name.length).toBeLessThan(11);
});

test('check type error of personage', () => {
  const bowman = new Bowman('Alex', 'Zombie');
  expect(bowman.type).toBe('Bowman');
})

test('check empty type', () => {
  const bowman = new Bowman('Alex', '');
  expect(bowman.type).not.toBe('');
})