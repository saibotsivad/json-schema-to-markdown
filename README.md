# json-schema-to-markdown

This module turns a [JSON Schema](http://json-schema.org/) into a
human-readable markdown file.

This module does *not* implement anywhere near the full RFC specs.
If you have bits of the RFC that you'd like implemented, let me
know and I'll try to add them in a timely manner. Pull requests
are also very welcome.

# using

Install the normal way: `npm install json-schema-to-markdown`

or if using cli, install globally: `npm install -g json-schema-to-markdwon`

Use it like this:

```js
var parse = require('json-schema-to-markdown')
var schema = // An object that is a valid JSON Schema
var markdown = parse(schema)
```

### CLI

`json2md /path/to/schema_file.json`

**NOTE: input file must end with .json**

or

`cat /path/to/schema_file.json | json2md`

default output is to stdout but you may specify an output file

`json2md /path/to/schema_file.json /path/to/output.md`

**NOTE: output file must end with .md**

There are plenty of examples in the [test folder](./test), but a very
simple example would be as follows:

For a JSON file like this:

```json
{
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "Example Schema",
	"description": "This schema is awesome.",
	"type": "object",
	"properties": {
		"price": {
			"description": "Cost of the product.",
			"type": "number"
		}
	}
}
```

The output would be:

```markdown
# Example Schema

This schema is awesome.

The schema defines the following properties:

## `price` (number)

Cost of the product.
```

# license

Published and released under the [VOL](http://veryopenlicense.com).
