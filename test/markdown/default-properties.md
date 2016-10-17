# Example Schema
`(object)`

This schema is awesome.

This object has the following properties:

## `price` (number)

Cost of the product.

Default: `0`

## `color` (string)

Color of the product.

Default: `"red"`

## `elasticated` (boolean)

Indicates whether the garments are elasticated.

Default: `true`

## `availableStyles` (array)

Lists of the available styles of the product.

Default:
```
[
  "plain",
  "stripes",
  "stars"
]
```

All array elements must be of type:

### (string)

## `washingRecommendation` (object)

Washing recommendations.

Default:
```
{
  "temperature": "Wash at or below 60°C"
}
```

## `specialOffer` (object)

An associated special offer.

Default: `null`