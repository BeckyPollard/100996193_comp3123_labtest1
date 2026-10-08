const fs = require('fs');
const path = require('path');
const logs = path.join(__dirname, 'Logs');


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

removeLogs();
createLogs();
