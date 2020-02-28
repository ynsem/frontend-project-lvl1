#!/usr/bin/env node

import { greetUser, playGame } from '../src/index.js';

const GAME_BOUNDARIES = {
  min: 1,
  max: 99,
};

const GAME_ROUNDS = 3;

greetUser();
playGame(GAME_BOUNDARIES, GAME_ROUNDS);
