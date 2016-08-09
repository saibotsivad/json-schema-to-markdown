# Example Schema
`(object)`

This schema is awesome.

This object has the following properties:

## `price` (number)

Cost of the product.

Additional restrictions:

* Minimum: `3`
* Maximum: `12`

## `colors` (array)

Any kind of color.

All array elements should be of type:

### (string)

Additional restrictions:

* Minimum items: `1`
* Unique items: `true`

## `serial` (string)

A kind of serial number.

Additional restrictions:

* Regex pattern: `^[0-9]{3}_[A-F]{4}$`