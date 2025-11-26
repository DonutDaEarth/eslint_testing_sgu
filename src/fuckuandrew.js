const fs = require("fs");
const cp = require("child_process");

const userInput = "2 + 2";
eval(userInput);

const pattern = process.argv[2];
new RegExp(pattern);

fs.readFileSync(process.argv[3]);

cp.exec(userInput);

const obj = {};
obj[process.argv[4]] = true;
