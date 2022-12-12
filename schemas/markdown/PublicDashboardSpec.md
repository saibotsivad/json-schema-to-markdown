# Glean schema to represent dashboards.

The schema defines the following properties:

|property|description|type|required|
|---|---|---|---|
|glean|The Glean file format version.|string|true|
|grn|The persistent identifier for this dashboard.|string|false|
|name|The user-visible name of this dashboard.|string|true|
|description|The user-visible description for this dashboard.|string|false|
|type|The type of this resource, which in this case should always be "dashboard".|string|true|
|globalFilters|Specifies filters that are applied to all dashboard blocks.|array|false|
|sections|Specifies the sections that belong to this dashboard|array|true|


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

The persistent identifier for this dashboard.

</details>

<details>


<summary>

# `name` (string, required)

</summary>

The user-visible name of this dashboard.

</details>

<details>


<summary>

# `description` (string)

</summary>

The user-visible description for this dashboard.

</details>

<details>


<summary>

# `type` (string, enum, required)

</summary>

The type of this resource, which in this case should always be "dashboard".

This element must be one of the following enum values:

* `dashboard`

</details>

<details>


<summary>

# `globalFilters` (array)

</summary>

Specifies filters that are applied to all dashboard blocks.

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|gt|undefined|null,string,number|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `gt` (null,string,number, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|gte|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `gte` (, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|lt|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `lt` (, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|lte|undefined|null,string,number|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `lte` (null,string,number, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|contains|undefined|string|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `contains` (string, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|range|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `range` (, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|values|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `values` (, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

# `globalFilter` (object)

</summary>

Properties of the `globalFilter` object:

|property|description|type|required|
|---|---|---|---|
|excludeValues|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

## `excludeValues` (, required)

</summary>

</details>

<details>


<summary>

## `columnId` (string, required)

</summary>

</details>

<details>


<summary>

## `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

</details>

<details>


<summary>

# `sections` (array, required)

</summary>

Specifies the sections that belong to this dashboard

The object is an array with all elements of the type `object`.

The array object has the following properties:

|property|description|type|required|
|---|---|---|---|
|filters|Specifies filters that are applied to blocks in the section.|array|false|
|rows|Specifies the rows of blocks that belong to the section.|array|true|


<details>


<summary>

## `filters` (array)

</summary>

Specifies filters that are applied to blocks in the section.

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|gt|undefined|null,string,number|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `gt` (null,string,number, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|gte|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `gte` (, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|lt|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `lt` (, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|lte|undefined|null,string,number|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `lte` (null,string,number, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|contains|undefined|string|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `contains` (string, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|range|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `range` (, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|values|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `values` (, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

<details>


<summary>

## `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|excludeValues|undefined|undefined|true|
|columnId|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains the column being filtered.|string|true|


<details>


<summary>

### `excludeValues` (, required)

</summary>

</details>

<details>


<summary>

### `columnId` (string, required)

</summary>

</details>

<details>


<summary>

### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains the column being filtered.

</details>

</details>

</details>

<details>


<summary>

## `rows` (array, required)

</summary>

Specifies the rows of blocks that belong to the section.

The object is an array with all elements of the type `object`.

The array object has the following properties:

|property|description|type|required|
|---|---|---|---|
|blocks|Specifies the blocks to display in this row.|array|true|
|height|Specifies the height of the row.|number|false|


<details>


<summary>

### `blocks` (array, required)

</summary>

Specifies the blocks to display in this row.

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

### `block` (object)

</summary>

Properties of the `block` object:

|property|description|type|required|
|---|---|---|---|
|width|Specifies the width of a content block (saved views, metric, or markdown)|number|false|
|type|undefined|string|true|
|text|The markdown text content of this block.|string|true|


<details>


<summary>

#### `width` (number)

</summary>

Specifies the width of a content block (saved views, metric, or markdown)

</details>

<details>


<summary>

#### `type` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `markdown`

</details>

<details>


<summary>

#### `text` (string, required)

</summary>

The markdown text content of this block.

</details>

</details>

<details>


<summary>

### `block` (object)

</summary>

Properties of the `block` object:

|property|description|type|required|
|---|---|---|---|
|width|Specifies the width of a content block (saved views, metric, or markdown)|number|false|
|type|undefined|string|true|
|dataModel|Filepath or GRN of the model definition which contains this metric.|string|true|
|dataModelMetricId|ID of the metric column (in `dataModel`) to display|string|true|
|label|Label to display for this block|string|false|
|filters|Filters to apply when calculating the metric of this block|array|false|
|ignoreDashboardFilters|Flag indicating whether the chart should ignore global & section filters|boolean|false|


<details>


<summary>

#### `width` (number)

</summary>

Specifies the width of a content block (saved views, metric, or markdown)

</details>

<details>


<summary>

#### `type` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `metric`

</details>

<details>


<summary>

#### `dataModel` (string, required)

</summary>

Filepath or GRN of the model definition which contains this metric.

</details>

<details>


<summary>

#### `dataModelMetricId` (string, required)

</summary>

ID of the metric column (in `dataModel`) to display

</details>

<details>


<summary>

#### `label` (string)

</summary>

Label to display for this block

</details>

<details>


<summary>

#### `filters` (array)

</summary>

Filters to apply when calculating the metric of this block

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|gt|undefined|null,string,number|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `gt` (null,string,number, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|gte|undefined|undefined|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `gte` (, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|lt|undefined|undefined|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `lt` (, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|lte|undefined|null,string,number|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `lte` (null,string,number, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|contains|undefined|string|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `contains` (string, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|range|undefined|undefined|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `range` (, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|values|undefined|undefined|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `values` (, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `filter` (object)

</summary>

Properties of the `filter` object:

|property|description|type|required|
|---|---|---|---|
|excludeValues|undefined|undefined|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `excludeValues` (, required)

</summary>

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

</details>

<details>


<summary>

#### `ignoreDashboardFilters` (boolean)

</summary>

Flag indicating whether the chart should ignore global & section filters

</details>

</details>

<details>


<summary>

### `block` (object)

</summary>

Properties of the `block` object:

|property|description|type|required|
|---|---|---|---|
|width|Specifies the width of a content block (saved views, metric, or markdown)|number|false|
|type|undefined|string|true|
|savedView|Filepath or GRN of the saved view to display.|string|true|
|label|Label to display for this block|string|false|
|axisLabels|The visibility of axis labels when using an area, bar, or line chart|string|false|
|legendPosition|The position of the chart legend when using an area, bar, line, or horizontal bar chart|string|false|
|ignoreDashboardFilters|Flag indicating whether the chart should ignore global & section filters|boolean|false|
|legend|Deprecated -- use "legendPosition" instead. This field is ignored.|string|false|


<details>


<summary>

#### `width` (number)

</summary>

Specifies the width of a content block (saved views, metric, or markdown)

</details>

<details>


<summary>

#### `type` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `savedView`

</details>

<details>


<summary>

#### `savedView` (string, required)

</summary>

Filepath or GRN of the saved view to display.

</details>

<details>


<summary>

#### `label` (string)

</summary>

Label to display for this block

</details>

<details>


<summary>

#### `axisLabels` (string, enum)

</summary>

The visibility of axis labels when using an area, bar, or line chart

This element must be one of the following enum values:

* `hide`
* `inherit`
* `show`

</details>

<details>


<summary>

#### `legendPosition` (string, enum)

</summary>

The position of the chart legend when using an area, bar, line, or horizontal bar chart

This element must be one of the following enum values:

* `bottom`
* `inherit`
* `left`
* `none`
* `right`
* `top`

</details>

<details>


<summary>

#### `ignoreDashboardFilters` (boolean)

</summary>

Flag indicating whether the chart should ignore global & section filters

</details>

<details>


<summary>

#### `legend` (string)

</summary>

Deprecated -- use "legendPosition" instead. This field is ignored.

</details>

</details>

<details>


<summary>

### `block` (object)

</summary>

Properties of the `block` object:

|property|description|type|required|
|---|---|---|---|
|width|Specifies the width of a content block (saved views, metric, or markdown)|number|false|
|type|undefined|string|true|


<details>


<summary>

#### `width` (number)

</summary>

Specifies the width of a content block (saved views, metric, or markdown)

</details>

<details>


<summary>

#### `type` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `empty`

</details>

</details>

</details>

<details>


<summary>

### `height` (number)

</summary>

Specifies the height of the row.

</details>

</details>

</details>