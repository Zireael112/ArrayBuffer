import MathCreateCharacter from './math_character';

export default class Daemon extends MathCreateCharacter {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
