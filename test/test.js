var fs = require('fs')
var test = require('tape')
var validator = require('is-my-json-valid')
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

test('Internal test that invalid JSON schemas are an error', function(t) {
	var passed = false
	try {
		validator({
			$schema: 'http://json-schema.org/draft-04/schema#',
			title: 'Example Invalid Schema',
			type: 'PROPERTY DOES NOT EXIST'
		})
	} catch (e) {
		passed = true
	}
	t.ok(passed, 'exception is thrown for invalid JSON schema')
	t.end()
})

test('All the files parse as expected.', function(t) {
	testGoodFiles.forEach(function(file) {
		var json = require('./schemas/' + file + '.json')
		var markdown = fs.readFileSync('./test/markdown/' + file + '.md', 'utf8')
		var parsed = parser(json)
		validator(json) // assert that all our testable JSON schema files are valid
		t.equal(parsed, markdown, 'markdown file "' + file + '" should match parser output')
	})
	t.end()
})
