const fs = require('fs');
const path = require('path');
const logs = path.join(__dirname, 'Logs');

console.log("Please run question-3.js");
console.log("I just split the functions into their own files because I could");
console.log("");

const createLogs = () => {
  if(!fs.existsSync(logs)) {
    fs.mkdirSync(logs);
  }
  process.chdir(logs);
  for(let i = 0; i < 10; i++) {
    const fileName = `log${i + 1}.txt`;
    fs.writeFileSync(fileName, fileName);
    console.log(fileName);
  }
};

module.exports = createLogs;
