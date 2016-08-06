#!/usr/bin/env node
var fs = require('fs');
var parse = require('json-schema-to-markdown');
var args = process.argv.slice(2);
if (args.length == 0 || args[0] === '-h' || args[0] === '--help') {
    console.log("Usage: json-schema-to-markdown [options...] [input-file...]");
    console.log("");
    console.log("    Read in JSON schema and output Markdown.");
    console.log("");
    console.log("    Options:");
    console.log("        --help -h  Show this help");
    console.log("");
    console.log("   Use single dash '-' to as input file read from STDIN");
    process.exit(0);
}
if (args[0] === '-') {
    var jsonChunks = [];
    process.stdin.on('data', function(chunk) {
        jsonChunks.push(chunk);
    });
    process.stdin.on('end', function() {
        console.log(parse(JSON.parse(jsonChunks.join())));
    })
}
for (var i = 0; i < args; i++) {
    var schema = JSON.parse(fs.readFileSync(args[i]));
    console.log(parse(schema));
}
