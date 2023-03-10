import Character from './Character';

class Zombie extends Character { // eslint-disable-line no-unused-vars
  constructor(name = '', type = 'Zombie') {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное количество символов!');
    } if (!name) {
      throw new Error('Имя не задано!');
    } if (!type) {
      throw new Error('Выберите тип персонажа!');
    }
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
