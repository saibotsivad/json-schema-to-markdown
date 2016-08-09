/*
 * TODO info
 */
module.exports = {
	render: function(schema) {
		return generatePropertyRestrictions(schema)
	}
}

function generatePropertyRestrictions(schema) {
	var generate = generateSinglePropertyRestriction(schema)
	return [
		// For numeric types
		generate('multipleOf', 'Multiple of'),
		generate('minimum', 'Minimum'),
		generate('exclusiveMinimum', 'Exclusive minimum'),
		generate('maximum', 'Maximum'),
		generate('exclusiveMaximum', 'Exclusive maximum'),
		// For string types
		generate('maxLength', 'Maximum length'),
		generate('minLength', 'Minimum length'),
		generate('pattern', 'Regex pattern'),
		// For array types
		// FIXME additionalItems AND items
		generate('maxItems', 'Maximum items'),
		generate('minItems', 'Minimum items'),
		generate('uniqueItems', 'Unique items'),
		// For object types
		generate('maxProperties', 'Maximum number of properties'),
		generate('minProperties', 'Minimum number of properties')
		// FIXME required? additionalProperties? patternProperties?
		// TODO for any instance type: enum, allOf, etc.
	].filter(function(text) {
		return text
	}).join('\n')
}

function generateSinglePropertyRestriction(schema) {
	return function(key, text) {
		if (schema[key]) {
			return '* ' + text + ': `' + schema[key] + '`'
		} else {
			return null
		}
	}
}
