import MathCreateCharacter from './math_character';

export default class Magician extends MathCreateCharacter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
