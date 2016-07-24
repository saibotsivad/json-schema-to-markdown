# json-schema-to-markdown

This module turns a [JSON Schema](http://json-schema.org/) into a
human-readable markdown file.

<!-- BEGIN-MARKDOWN-TOC -->
* [Installation](#installation)
* [Usage](#usage)
* [Command line](#command-line)
* [License](#license)

<!-- END-MARKDOWN-TOC -->

This module does *not* implement anywhere near the full RFC specs.
If you have bits of the RFC that you'd like implemented, let me
know and I'll try to add them in a timely manner. Pull requests
are also very welcome.

## Installation

Install the normal way: `npm install json-schema-to-markdown`

## Usage

Use it like this:

```js
var parse = require('json-schema-to-markdown')
var schema = // An object that is a valid JSON Schema
var markdown = parse(schema)
```

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

## Command line

If installed globally (`npm install -g json-schema-to-markdown`), a script `json-schema-to-markdown` is available to convert JSON schema files to Markdown on the command line.

```sh
json-schema-to-markdown schema.json > schema.json.md
```

You can also read the JSON from STDIN:

```sh
cat schema.json | json-schema-to-markdown - > schema.json.md
```

## License

Published and released under the [Very Open License](http://veryopenlicense.com).
