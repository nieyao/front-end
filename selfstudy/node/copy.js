var fs = require('fs');
var rf = fs.createReadStream('a.txt');
var wf = fs.createWriteStream('b.txt');
rf.pipe(wf);