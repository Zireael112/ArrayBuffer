import CreateCharacter from '../js/character';
import MathCreateCharacter from '../js/math_character';
import Daemon from '../js/daemon';
import Magician from '../js/magician';

test('create character', () => {
  const result = new CreateCharacter('John', 'Daemon');
  expect(new CreateCharacter('John', 'Daemon')).toStrictEqual(result);
});

test('create character daemon', () => {
  const result = new Daemon('John');
  expect(new Daemon('John')).toStrictEqual(result);
});

test('create characte Magician', () => {
  const result = new Magician('John');
  expect(new Magician('John')).toStrictEqual(result);
});

test('create characte with math class and get attack without stoned', () => {
  const result = new MathCreateCharacter('John');
  result.setAttack = 100;
  result.range = 5;
  result.getAttack;
  expect(result.attack).toBe(60);
});

test('create characte with math class and get attack with stoned', () => {
  const result = new MathCreateCharacter('John');
  result.setAttack = 100;
  result.range = 5;
  result.setStoned = true;
  result.getAttack;
  expect(result.attack).toBe(48);
});
