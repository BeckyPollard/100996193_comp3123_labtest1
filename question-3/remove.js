const fs = require('fs');
const path = require('path');
const logs = path.join(__dirname, 'Logs');

console.log("Please run question-3.js");
console.log("I just split the functions into their own files because I could");
console.log("");

const removeLogs = () => {
  if(fs.existsSync(logs)) {
    const files = fs.readdirSync(logs);

    files.forEach(file => {
      const filePath = path.join(logs, file);
      console.log(`Delete files... ${file}`);
      fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logs);
  } else {
    console.log('ERROR no log files to delete so script cannot');
  }
};

module.exports = removeLogs;
