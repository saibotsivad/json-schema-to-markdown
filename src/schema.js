/*
 * Renders JSON schemas into Markdown
 * These can be top-level schema or definitions inside a top-level schema
 *
 * Currently the `name` and `octothorpes` are passed around.
 *
 * Generally a schema has a `name` when it is inside another definition and
 * therefore will not define a `title`.
 *
 * Ideas for improvement:
 *
 * * Don't pass `octothorpes` around but instead a number
 *   This would mean we can do something about > level 6 headings
 *   Currently this just leads to 7 '#'s which is invalid Markdown
 *
 * * Allow greater control over rendering
 *   e.g. You might want all examples rendered "inline", or different number of
 *   spaces
 *   We should have a top-level options passed to the renderSchema function
 *
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

	if (schema.default !== undefined) {
		if (schema.default === null
			|| [ "boolean", "number", "string" ].indexOf(typeof schema.default) !== -1
		) {
			text.push('Default: `' + JSON.stringify(schema.default) + '`')
		} else {
			text.push('Default:\n```\n' + JSON.stringify(schema.default, null, 2) + '\n```')
		}
	}

	if (schema.type == 'object') {
		text = text.concat(renderObjectSchema(schema, name, octothorpes))
	} else if (schema.type == 'array') {
		text = text.concat(renderArraySchema(schema, name, octothorpes))
	} else if (schema.enum) {
		text.push('This element must be one of the following enum values:')
		text.push(schema.enum.map(function(enumItem) {
			return '* `' + enumItem + '`'
		}).join('\n'));
	} else {
		text = text.concat(renderItemsValidation(schema, 'item', octothorpes))
	}

	var restrictions = Validation.render(schema)
	if (restrictions) {
		text.push('Additional restrictions:')
		text.push(restrictions)
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
		text.push('All array elements must be of the type defined by `' + schema.items['$ref'].substr(14) +'`')
	} else if (schema.items && schema.items.type) {
		text.push('All array elements must be of type:')
		text = text.concat(renderSchema(schema.items, undefined, '#' + octothorpes))
	} else if (schema.items) {
		text = text.concat(renderItemsValidation(schema.items, 'array', octothorpes))
	}
	return text
}

function renderItemsValidation(schema, type, octothorpes) {
	var text = []
	var validationItems = []
	if (schema.allOf) {
		text.push('The elements of this ' + type + ' must match *all* of the following properties:')
		validationItems = schema.allOf
	} else if (schema.anyOf) {
		text.push('The elements of this ' + type + ' must match *at least one* of the following properties:')
		validationItems = schema.anyOf
	} else if (schema.oneOf) {
		text.push('The elements of this ' + type + ' must match *exactly one* of the following properties:')
		validationItems = schema.oneOf
	} else if (schema.not) {
		text.push('The elements of this ' + type + ' must *not* match the following properties:')
		validationItems = schema.not
	}
	if (validationItems.length > 0) {
		validationItems.forEach(function(item) {
			text = text.concat(renderSchema(item, undefined, '#' + octothorpes))
		})
	}
	return text
}
