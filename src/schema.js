/*
 * TODO info
 */
var SchemaTitle = require('./schema-title.js')
var Example = require('./example.js')
var Validation = require('./validation.js')

module.exports = {
	render: function(schema, name, octothorpes) {
		return renderSchema(schema, name, octothorpes)
	}
}

function renderSchema(schema, name, octothorpes, isRequired) {
	var text = [
		SchemaTitle.render(schema, name, octothorpes, isRequired),
		Example.renderExample(schema),
		schema.description
	]

	if (schema.type == 'object') {
		text = text.concat(renderObjectSchema(schema, name, octothorpes))
	} else if (schema.type == 'array') {
		text = text.concat(renderArraySchema(schema, name, octothorpes))
	} else if (schema.enum) {
		text.push('This element must be one of the following enum values:')
		text.push(schema.enum.map(function(enumItem) {
			return '* `' + enumItem + '`'
		}).join('\n'));
	}

	var restrictions = Validation.render(schema)
	if (restrictions) {
		text.push('Additional restrictions:')
		text.push(restrictions)
	}

	if (schema.default !== undefined) {
		if (schema.default === null || [ "boolean", "number", "string" ].indexOf(typeof schema.default) !== -1) {
			text.push('Default: `' + JSON.stringify(schema.default) + '`')
		} else {
			text.push('Default:')
			text.push('```\n' + JSON.stringify(schema.default, null, 2) + '\n```')
		}
	}

	return text
}

function renderObjectSchema(schema, name, octothorpes) {
	var text = []
	if(schema.properties) {
		if (name) {
			text.push('The `' + name + '` object has the following properties:')
		} else {
			text.push('This object has the following properties:')
		}
		Object.keys(schema.properties).map(function(propertyKey) {
			var propertyIsRequired = schema.required && schema.required.indexOf(propertyKey) >= 0
			text = text.concat(renderSchema(schema.properties[propertyKey], propertyKey, '#' + octothorpes, propertyIsRequired))
		})
	}
	return text
}

function renderArraySchema(schema, name, octothorpes) {
	var text = []

	if (schema.items['$ref']) {
		// TODO ['$ref']
	} else if (schema.items && schema.items.type) {
		text.push('All array elements should be of type:')
		text = text.concat(renderSchema(schema.items, undefined, '#' + octothorpes))
	} else if (schema.items) {
		text = text.concat(renderItemsValidation(schema, octothorpes))
	}
	return text
}

function renderItemsValidation(schema, octothorpes) {
	var text = []
	var validationItems = []
	if (schema.items.allOf) {
		text.push('The elements of the array must match *all* of the following properties:')
		validationItems = schema.items.allOf
	} else if (schema.items.anyOf) {
		text.push('The elements of the array must match *at least one* of the following properties:')
		validationItems = schema.items.anyOf
	} else if (schema.items.oneOf) {
		text.push('The elements of the array must match *exactly one* of the following properties:')
		validationItems = schema.items.oneOf
	} else if (schema.items.not) {
		text.push('The elements of the array must *not* match the following properties:')
		validationItems = schema.items.not
	}
	if (validationItems.length > 0) {
		validationItems.forEach(function(item) {
			text = text.concat(renderSchema(item, undefined, '#' + octothorpes))
		})
	}
	return text
}
