var fs = require('fs');
var parse = require('json-schema-to-markdown');
for (var i = 2; i < process.argv.length; i++) {
    var schema = JSON.parse(fs.readFileSync(process.argv[i]));
    console.log(parse(schema));
}
