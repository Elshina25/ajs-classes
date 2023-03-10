import Daemon from '../js/Daemon';

test('create personage', () => {
  const daemon = new Daemon('personage', 'Daemon');
  expect(daemon).toEqual({
    name: 'personage',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('less name symbols', () => {
  const daemon = new Daemon('a', 'Daemon');
  expect(daemon.name.length).toBeGreaterThan(1);
});

test('more name symbols', () => {
  const daemon = new Daemon('djdordmalscqr', 'Daemon');
  expect(daemon.name.length).toBeLessThan(11);
});

test('check type error of personage', () => {
  const daemon = new Daemon('Alex', 'Zombie');
  expect(daemon.type).toBe('Daemon');
})

test('check empty type', () => {
  const daemon = new Daemon('Alex', '');
  expect(daemon.type).not.toBe('');
})