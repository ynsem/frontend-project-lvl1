#!/usr/bin/env node

import { greetUser } from '../src/index.js';
import playPrime from '../src/games/prime.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

greetUser();
playPrime(GAME_PARAMS);
