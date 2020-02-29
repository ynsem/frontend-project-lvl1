#!/usr/bin/env node

import { greetUser, playCalc } from '../src/index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'What is the result of the expression?',
};

greetUser();
playCalc(GAME_PARAMS);
