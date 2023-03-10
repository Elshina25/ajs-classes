import Character from './Character';

export default class Daemon extends Character { // eslint-disable-line no-unused-vars
  constructor(name = '', type = 'Daemon') {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимая длина имени!');
    } if (!type) {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
