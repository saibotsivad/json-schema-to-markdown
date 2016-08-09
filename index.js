var Schema = require('./src/schema.js')

module.exports = function(schema, startingOctothorpes) {
	var subSchemaTypes = Object.keys(schema.definitions || {}).reduce(function(map, subSchemaTypeName) {
		map['#/definitions/' + subSchemaTypeName] = subSchemaTypeName
		return map
	}, {})

	var text = []
	var octothorpes = startingOctothorpes || ''

	text = text.concat(Schema.render(schema, undefined, '#' + octothorpes))

	if (schema.definitions) {
		text.push('---')
		text.push('#' + octothorpes + ' Sub Schemas')
		text.push('The schema defines the following additional types:')
		Object.keys(schema.definitions).forEach(function(subSchemaName) {
			text = text.concat(Schema.render(schema.definitions[subSchemaName], subSchemaName, '##' + octothorpes))
		})
	}

	return text.filter(function(line) {
		return !!line
	}).join('\n\n')
}
