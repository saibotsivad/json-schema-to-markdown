// This is really messy, and I apologize for that.

var coreSchemaTypes = [
	'array',
	'boolean',
	'integer',
	'number',
	'null',
	'object',
	'string'
]

function generateElementTitle(octothorpes, elementName, elementType, isRequired, example) {
	var text = [ octothorpes, ' `', elementName, '`' ]
	if (elementType || isRequired) {
		text.push(' (')
		if (elementType) {
			text.push(elementType)
		}
		if (isRequired) {
			text.push(', required')
		}
		text.push(')')
	}
	if (example) {
		text.push(' eg: `'+example+'`')
	}
	return text.join('')
}

function generatePropertyRestrictions(schema) {
	var generate = generateSinglePropertyRestriction(schema)
	return [
		generate('minimum', 'Minimum'),
		generate('maximum', 'Maximum'),
		generate('pattern', 'Regex pattern'),
		generate('minItems', 'Minimum items'),
		generate('uniqueItems', 'Unique items')
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

function generateSchemaSectionText(octothorpes, name, isRequired, schema, subSchemas) {
	var schemaType = getActualType(schema, subSchemas)

	var text = [
		generateElementTitle(octothorpes, name, schemaType, isRequired, schema.example),
		schema.description
	]
	if (schemaType === 'object') {
		text.push('Properties of the `' + name + '` object:')
		generatePropertySection(octothorpes, schema, subSchemas).forEach(function(section) {
			text = text.concat(section)
		})
	} else if (schemaType === 'array') {
		var itemsType = schema.items && schema.items.type
		if (!itemsType && schema.items['$ref']) {
			itemsType = getActualType(schema.items, subSchemas)
		}
		text.push('The object is an array with all elements of the type `' + itemsType + '`.')
		if (itemsType === 'object') {
			text.push('The array object has the following properties:')
			generatePropertySection(octothorpes, schema.items, subSchemas).forEach(function(section) {
				text = text.concat(section)
			})
		}
	} else if (schemaType === 'enum') {
		text.push('The object is an enum, with one of the following required values:')
		text.push(schema.enum.map(function(enumItem) {
			return '* `' + enumItem + '`'
		}).join('\n'))
	} else if (schema.oneOf) {
		text.push('The object must be one of the following types:')
		text.push(schema.oneOf.map(function(oneOf) {
			return '* `' + subSchemas[oneOf['$ref']] + '`'
		}).join('\n'))
	}

	var restrictions = generatePropertyRestrictions(schema)
	if (restrictions) {
		text.push('Additional restrictions:')
		text.push(restrictions)
	}

	return text
}

function generatePropertySection(octothorpes, schema, subSchemas) {
	if (schema.properties) {
		return Object.keys(schema.properties).map(function(propertyKey) {
			var propertyIsRequired = schema.required && schema.required.indexOf(propertyKey) >= 0
			return generateSchemaSectionText(octothorpes + '#', propertyKey, propertyIsRequired, schema.properties[propertyKey], subSchemas)
		})
	} else if (schema.oneOf) {
		var oneOfList = schema.oneOf.map(function(innerSchema) {

			return '* `' + getActualType(innerSchema, subSchemas) + '`'
		}).join('\n')
		return ['This property must be one of the following types:', oneOfList]
	} else {
		return []
	}
}

function getActualType(schema, subSchemas) {
	if (schema.type) {
		return schema.type
	} else if (schema['$ref'] && subSchemas[schema['$ref']]) {
		return subSchemas[schema['$ref']]
	} else if (schema.enum) {
		return 'enum'
	} else {
		return undefined
	}
}

module.exports = function(schema) {
	var subSchemaTypes = Object.keys(schema.definitions || {}).reduce(function(map, subSchemaTypeName) {
		map['#/definitions/' + subSchemaTypeName] = subSchemaTypeName
		return map
	}, {})

	var text = []
	var octothorpes = ''

	if (schema.title) {
		octothorpes += '#'
		text.push(octothorpes + ' ' + schema.title)
	}
	if (schema.description) {
		text.push(schema.description)
	}

	if (schema.type === 'object') {
		text.push('The schema defines the following properties:')
		generatePropertySection(octothorpes, schema, subSchemaTypes).forEach(function(section) {
			text = text.concat(section)
		})
	} else if (schema.type === 'array') {}

	if (schema.definitions) {
		text.push('---')
		text.push('# Sub Schemas')
		text.push('The schema defines the following additional types:')
		Object.keys(schema.definitions).forEach(function(subSchemaTypeName) {
			text.push('## `' + subSchemaTypeName + '` (' + schema.definitions[subSchemaTypeName].type + ')')
			text.push(schema.definitions[subSchemaTypeName].description)
			if (schema.definitions[subSchemaTypeName].type === 'object') {
				text.push('Properties of the `' + subSchemaTypeName + '` object:')
			}
			generatePropertySection('##', schema.definitions[subSchemaTypeName], subSchemaTypes).forEach(function(section) {
				text = text.concat(section)
			})
		})
	}

	return text.filter(function(line) {
		return !!line
	}).join('\n\n')
}
