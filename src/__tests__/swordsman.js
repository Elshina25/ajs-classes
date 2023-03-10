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

test('less name symbols', () => {
  const swordsman = new Swordsman('a', 'Swordsman');
  expect(swordsman.name.length).toBeGreaterThan(1);
});

test('more name symbols', () => {
  const swordsman = new Swordsman('djdordmalscqr', 'Swordsman');
  expect(swordsman.name.length).toBeLessThan(11);
});

test('check type error of personage', () => {
  const swordsman = new Swordsman('Alex', 'Zombie');
  expect(swordsman.type).toBe('Swordsman');
});

test('check empty type', () => {
  const swordsman = new Swordsman('Alex', '');
  expect(swordsman.type).not.toBe('');
});