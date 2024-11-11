// var generateName = require('sillyname');
import generateStupidName from 'sillyname';
import superheroes, { randomSuperhero } from 'superheroes';



var sillyName = generateStupidName();
const heroName = randomSuperhero();

console.log(`You are ${sillyName} ${heroName}`)