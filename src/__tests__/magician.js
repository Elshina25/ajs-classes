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

test('less name symbols', () => {
  const magician = new Magician('a', 'Magician');
  expect(magician.name.length).toBeGreaterThan(1);
});

test('more name symbols', () => {
  const magician = new Magician('djdordmalscqr', 'Magician');
  expect(magician.name.length).toBeLessThan(11);
});

test('check type error of personage', () => {
  const magician = new Magician('Alex', 'Zombie');
  expect(magician.type).toBe('Magician');
})

test('check empty type', () => {
  const magician = new Magician('Alex', '');
  expect(magician.type).not.toBe('');
})