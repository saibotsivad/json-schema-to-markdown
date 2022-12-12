# Glean schema to represent color palettes in data ops.

The schema defines the following properties:

|property|description|type|required|
|---|---|---|---|
|glean|The Glean file format version.|string|true|
|grn|The persistent identifier for this color palette.|string|false|
|name|The user-visible name of this color palette.|string|true|
|type|The type of this resource, which in this case should always be "color_palette".|string|true|
|defaultColor|The default custom color of this color palette.|object|true|
|colors|The custom colors of this color palette.|array|true|
|options|The additional options of this color palette.|object|false|


<details>


<summary>

# `glean` (string, enum, required)

</summary>

The Glean file format version.

This element must be one of the following enum values:

* `1.0`

</details>

<details>


<summary>

# `grn` (string)

</summary>

The persistent identifier for this color palette.

</details>

<details>


<summary>

# `name` (string, required)

</summary>

The user-visible name of this color palette.

</details>

<details>


<summary>

# `type` (string, enum, required)

</summary>

The type of this resource, which in this case should always be "color_palette".

This element must be one of the following enum values:

* `color_palette`

</details>

<details>


<summary>

# `defaultColor` (object, required)

</summary>

The default custom color of this color palette.

Properties of the `defaultColor` object:

|property|description|type|required|
|---|---|---|---|
|name|undefined|string|false|
|color|undefined|string|true|


<details>


<summary>

## `name` (string)

</summary>

</details>

<details>


<summary>

## `color` (string, required)

</summary>

</details>

</details>

<details>


<summary>

# `colors` (array, required)

</summary>

The custom colors of this color palette.

The object is an array with all elements of the type `object`.

The array object has the following properties:

|property|description|type|required|
|---|---|---|---|
|name|undefined|string|false|
|color|undefined|string|true|


<details>


<summary>

## `name` (string)

</summary>

</details>

<details>


<summary>

## `color` (string, required)

</summary>

</details>

</details>

<details>


<summary>

# `options` (object)

</summary>

The additional options of this color palette.

Properties of the `options` object:

|property|description|type|required|
|---|---|---|---|
|additionalColorGeneration|undefined|string|true|


<details>


<summary>

## `additionalColorGeneration` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `interpolate`
* `repeat`

</details>

</details>