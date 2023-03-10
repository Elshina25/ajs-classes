import Character from './Character';

export default class Undead extends Character { // eslint-disable-line no-unused-vars
  constructor(name = '', type = 'Undead') {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимая длина имени!');
    } if (type !== 'Undead' || type === '') {
      throw new Error('Неверный тип игрока!');
    };
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
