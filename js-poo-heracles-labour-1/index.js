// First Labour : Heracles vs Nemean Lion
// use your Figher class here
import {Fighter} from "./src/Fighter.js";
import { MAX_LIFE } from "./src/Fighter.js";

const heracles = new Fighter("š§ Heracles", 20, 6);
const nemeanLion = new Fighter("š¦ Nemean Lion", 11, 13);

for (let i = 1; i < MAX_LIFE ; i++){
if (heracles.life > 0 && nemeanLion.life > 0){
  console.log(`š Round nĀ°${i}`)
  heracles.fight(nemeanLion);
  nemeanLion.fight(heracles);
} else if (heracles.life == 0) {
  console.log(`${nemeanLion.name} wins! š and ${heracles.name} looses š`);
  i = MAX_LIFE
} else if (nemeanLion.life == 0) {
  console.log(`${heracles.name} wins! š and ${nemeanLion.name} looses š`);
  i = MAX_LIFE
}
}
