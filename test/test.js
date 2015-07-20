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
	'one-of'
]

test('All the files parse as expected.', function(t) {
	testGoodFiles.forEach(function(file) {
		var json = require('./schemas/' + file + '.json')
		var markdown = fs.readFileSync('./test/markdown/' + file + '.md', 'utf8')
		var parsed = parser(json)
		t.equal(parsed, markdown, 'markdown file should match parser output')
	})
	t.end()
})
