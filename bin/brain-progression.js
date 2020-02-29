#!/usr/bin/env node

import { greetUser } from '../src/index.js';
import playProgression from '../src/games/progression.js';

const GAME_PARAMS = {
  min: 1,
  max: 10,
  rounds: 3,
  rules: 'What number is missing in the progression?',
};

greetUser();
playProgression(GAME_PARAMS);
