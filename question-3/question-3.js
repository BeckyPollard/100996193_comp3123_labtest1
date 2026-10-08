const removeLogs = require('./remove');
const createLogs = require('./add');

// "It is acceptable, to have a remove.js script and a separate add.js script."
// I will take this as a fun challenge let's do it
// This file is just here because i like each folder having a script with its name
// can run this and it'll do both sure

const logs = () => {
  removeLogs();
  createLogs();
};
logs();

console.log("");
