// var generateName = require('sillyname');

import generateName from "sillyname";
var sillyName = generateName();

import {randomSuperhero} from "superheroes" 
var superhero = randomSuperhero();

console.log(`My name is ${sillyName} and my favorite superhero is ${superhero}`);