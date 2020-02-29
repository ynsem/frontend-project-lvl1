#!/usr/bin/env node

import { greetUser, playGcd } from '../src/index.js';

const GAME_PARAMS = {
  min: 2,
  max: 50,
  rounds: 3,
  rules: 'Find the greatest common divisor of given numbers.',
};

greetUser();
playGcd(GAME_PARAMS);
