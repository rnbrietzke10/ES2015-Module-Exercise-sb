import fruits from './food';

import { choice, remove } from './helper';

const randomFruit = choice(fruits);

console.log(`I would one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
const fruitLeft = remove(fruits, randomFruit);
console.log(`Delicious! May I have another?`);
console.log(`I’m sorry, we’re all out. We have ${fruitLeft.length} left.`);
