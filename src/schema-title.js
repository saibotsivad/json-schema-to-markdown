/*
 * TODO info
 */
module.exports = {
	render: function(schema, name, octothorpes, isRequired) {
		return renderTitle(schema, name, octothorpes, isRequired)
	}
}

function renderTitle(schema, name, octothorpes, isRequired) {
	var text = [ octothorpes, ' ' ]
	if (name) {
		text.push('`' + name + '` ')
	} else if (schema.title) {
		text.push(schema.title + '\n')
	}
	if (schema.type) {
		if (schema.title) {
			text.push('`')
		}
		text.push('(');
		text.push(schema.type);
		if (schema.enum) {
			text.push(', enum')
		}
		if (isRequired) {
			text.push(', required')
		}
		// TODO readOnly
		text.push(')');
		if (schema.title) {
			text.push('`')
		}
		//text.push('');
	}
	return text.join('')
}
