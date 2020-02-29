#!/usr/bin/env node

import { greetUser } from '../src/index.js';
import playCalc from '../src/games/calc.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'What is the result of the expression?',
};

greetUser();
playCalc(GAME_PARAMS);
