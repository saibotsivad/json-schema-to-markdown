# Example Schema

This schema is awesome.

The schema defines the following properties:

## `price` (number)

Cost of the product.

Additional restrictions:

* Minimum: `3`
* Maximum: `12`

## `colors` (array)

Any kind of color.

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `1`
* Unique items: `true`

## `serial` (string)

A kind of serial number.

Additional restrictions:

* Regex pattern: `^[0-9]{3}_[A-F]{4}$`