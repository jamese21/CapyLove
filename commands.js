import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';


// Command to generate random capy image
const CAPY_COMMAND = {
  name: 'capy',
  description: 'Generate a random capybara image',
  type: 1,
};

const ALL_COMMANDS = [CAPY_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);