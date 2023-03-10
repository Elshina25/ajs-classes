import Character from './Character';

export default class Zombie extends Character { // eslint-disable-line no-unused-vars
  constructor(name = '', type = 'Zombie') {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимая длина имени!');
    } if (!type) {
      throw new Error('Неверный тип игрока!');
    }
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
