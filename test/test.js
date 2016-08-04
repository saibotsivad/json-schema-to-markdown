var fs = require('fs')
var test = require('tape')
var parser = require('../')

var testGoodFiles = [
	'simple',
	'simple-required',
	'simple-restrictions',
	'simple-enum',
	'simple-arrays',
	'simple-deep',
	'simple-no-title',
	'simple-definition',
	'simple-no-properties',
	'bare-array',
	'bare-boolean',
	'bare-integer',
	'bare-null',
	'bare-number',
	'bare-string',
	'bare-string-enum',
	'one-of',
	'items-one-of',
	'examples',
	"default-properties"
]

test('All the files parse as expected.', function(t) {
	testGoodFiles.forEach(function(file) {
		var json = require('./schemas/' + file + '.json')
		var markdown = fs.readFileSync('./test/markdown/' + file + '.md', 'utf8')
		var parsed = parser(json)
		t.equal(parsed, markdown, 'markdown file "' + file + '" should match parser output')
	})
	t.end()
})
