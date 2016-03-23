# Example Schema

This schema is awesome.

The schema defines the following properties:

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

The object is an array with all elements of the type `string`.

Default:

```
[
  "plain",
  "stripes",
  "stars"
]
```

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