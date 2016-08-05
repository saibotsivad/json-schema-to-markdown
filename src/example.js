/*
 * Nothing in the JSON Schema specification [1] tells us what the 'example'
 * field should be like.
 * We make the assumption that it is of the correct type
 * i.e. you are not wrapping an object inside a string
 *
 * [1] http://json-schema.org/documentation.html
 */
module.exports = {
	options: {
		pre: '> ',
		octothorpe: 3,
		space: 2
	},
	renderExample: function(schema, opt) {
		var text = '';
		opt = opt ? opt : this.options
		if (schema.example) {
			text = text.concat(opt.pre + '#'.repeat(opt.octothorpe) + ' Example JSON:\n\n```json\n')
			text = text.concat(JSON.stringify(schema.example, null, opt.space))
			text = text.concat('\n```\n')
		}
		return text
	}
}
