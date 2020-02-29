#!/usr/bin/env node

import { greetUser, playEven } from '../src/index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
};

greetUser();
playEven(GAME_PARAMS);
