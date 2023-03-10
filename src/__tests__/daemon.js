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
