import CreateCharacter from './character';

export default class MathCreateCharacter extends CreateCharacter {
  constructor(name, type) {
    super(name, type);
    this.range = 1;
    this.stoned = false;
  }

  set setStoned(value) {
    this.stoned = value;
  }

  set setAttack(value) {
    this.attack = value;
  }

  get getAttack() {
    let totalDamage = this.attack * (1 - ((this.range - 1) / 10));
    this.attack = totalDamage;
    if (this.stoned) {
      totalDamage -= Math.log2(this.range) * 5;
      this.attack = Math.round(totalDamage);
    }
    return totalDamage;
  }
}
