# json-schema-to-markdown

*This is a Scrive clone of [json-schema-to-markdown](https://github.com/saibotsivad/json-schema-to-markdown) and is not the the same as the package on NPM.*

This module turns a [JSON Schema](http://json-schema.org/) into a
human-readable markdown file.

This module does *not* implement anywhere near the full RFC specs.
If you have bits of the RFC that you'd like implemented, let me
know and I'll try to add them in a timely manner. Pull requests
are also very welcome.

# using

Install the "normal" way: `npm install
https://github.com/scrive/json-schema-to-markdown.git`

Use it like this:

```js
var parse = require('json-schema-to-markdown')
var schema = // An object that is a valid JSON Schema
var markdown = parse(schema)
```

There are plenty of examples in the [test folder](./test).