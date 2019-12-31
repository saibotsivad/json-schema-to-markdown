#!/usr/bin/env node

var parse = require('./index')
var fs = require("fs");
var args = process.argv.slice(2);
var inputFile;
var outputFile;

var out = function(output) {

  output = parse(JSON.parse(output));

  if(outputFile) {

    fs.writeFileSync(outputFile, output);
    console.log("created " + outputFile);

  } else {

    console.log(output);

  }
};

for(var i =0; i < args.length; i++) {
  if(~args[i].indexOf('.json')) {
    inputFile = args[i];
  } else if(~args[i].indexOf('.md')) {
    outputFile = args[i];
  }
}

if(inputFile) {

  if (fs.existsSync(inputFile)) {

    out(fs.readFileSync(inputFile, 'utf8'));

  } else {

    throw new Error("File does not exist: " + inputFile);

  }

} else if (process.stdin) {

  var schema = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    let chunk;
    // Use a loop to make sure we read all available data.
    while ((chunk = process.stdin.read()) !== null) {
      schema += chunk;
    }
  });

  process.stdin.on('end', () => {
    out(schema);
  });

}
