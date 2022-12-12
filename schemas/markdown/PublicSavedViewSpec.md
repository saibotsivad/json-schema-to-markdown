# <details>


<summary>

#

</summary>

</details>

---

# Sub Schemas

The schema defines the following additional types:

## `AggregatedSavedViewSpec` (object)

Spec for saved views that visualize aggregated data.

Properties of the `AggregatedSavedViewSpec` object:

|property|description|type|required|
|---|---|---|---|
|visualization|Information about the visualization of the saved view.|object|true|
|data|Information about the data of the saved view.|object|true|
|glean|The Glean file format version.|string|true|
|grn|The persistent identifier for this saved view.|string|false|
|name|The user-visible name of this saved view.|string|true|
|type|The type of this resource, which in this case should always be "saved_view".|string|true|
|model|The file path to the data model definition.|string|true|
|hidden|A list of attribute column identifiers to hide in this view.|array|false|


<details>


<summary>

### `visualization` (object, required)

</summary>

Information about the visualization of the saved view.

Properties of the `visualization` object:

|property|description|type|required|
|---|---|---|---|
|chartType|The chart type.|string|true|
|colorPalette|The file path to the color palette definition.|string|false|
|showOther|Flag indicating whether unfiltered items should be displayed in an "Other" group when a breakout is active.|boolean|false|
|stack|The stacking type, when using an "area", "bar", or "line" chart).|string|false|
|showAxisLabels|Whether to show the axis labels when using an "area", "bar", or "line" chart|boolean|false|
|missingValuesBehavior|Whether to show missing values for a "bar" chart|string|false|
|legend|The position of the chart legend when using an "area", "bar", "line" or horizontal bar chart|string|false|
|tableColor|A gradient table color to be used in conjunction with table calculations in a "pivot" chart|string|false|
|padding|The amount of table padding to apply in a "pivot" or "table" chart|string|false|
|showBarLabels|Whether to show labels in a "horizontal bar" chart|boolean|false|
|tableVisualization|Cell visualizations for table or pivot charts|array|false|
|tableCellFormatting|Cell formatting for table or pivot charts|array|false|


<details>


<summary>

#### `chartType` (string, enum, required)

</summary>

The chart type.

This element must be one of the following enum values:

* `area`
* `bar`
* `line`
* `pivot`
* `table`

</details>

<details>


<summary>

#### `colorPalette` (string)

</summary>

The file path to the color palette definition.

</details>

<details>


<summary>

#### `showOther` (boolean)

</summary>

Flag indicating whether unfiltered items should be displayed in an "Other" group when a breakout is active.

</details>

<details>


<summary>

#### `stack` (string, enum)

</summary>

The stacking type, when using an "area", "bar", or "line" chart).

This element must be one of the following enum values:

* `stack`
* `stack100pct`
* `unstack`

</details>

<details>


<summary>

#### `showAxisLabels` (boolean)

</summary>

Whether to show the axis labels when using an "area", "bar", or "line" chart

</details>

<details>


<summary>

#### `missingValuesBehavior` (string, enum)

</summary>

Whether to show missing values for a "bar" chart

This element must be one of the following enum values:

* `hide`
* `show`

</details>

<details>


<summary>

#### `legend` (string, enum)

</summary>

The position of the chart legend when using an "area", "bar", "line" or horizontal bar chart

This element must be one of the following enum values:

* `bottom`
* `left`
* `none`
* `right`
* `top`

</details>

<details>


<summary>

#### `tableColor` (string, enum)

</summary>

A gradient table color to be used in conjunction with table calculations in a "pivot" chart

This element must be one of the following enum values:

* `blue`
* `green`
* `none`
* `red`

</details>

<details>


<summary>

#### `padding` (string, enum)

</summary>

The amount of table padding to apply in a "pivot" or "table" chart

This element must be one of the following enum values:

* `compact`
* `default`

</details>

<details>


<summary>

#### `showBarLabels` (boolean)

</summary>

Whether to show labels in a "horizontal bar" chart

</details>

<details>


<summary>

#### `tableVisualization` (array)

</summary>

Cell visualizations for table or pivot charts

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

#### `tableVisualizatio` (object)

</summary>

Properties of the `tableVisualizatio` object:

|property|description|type|required|
|---|---|---|---|
|calculation|undefined|string|true|
|columnId|undefined|string|false|
|type|undefined|string|true|
|maxWidthPixels|undefined|number|true|
|heightPixels|undefined|number|true|
|labelPlacement|undefined|string|true|


<details>


<summary>

##### `calculation` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `columnPercentMax`
* `columnPercentTotal`
* `rowPercentMax`
* `rowPercentTotal`

</details>

<details>


<summary>

##### `columnId` (string)

</summary>

</details>

<details>


<summary>

##### `type` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `bar`

</details>

<details>


<summary>

##### `maxWidthPixels` (number, required)

</summary>

</details>

<details>


<summary>

##### `heightPixels` (number, required)

</summary>

</details>

<details>


<summary>

##### `labelPlacement` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `floating`
* `none`
* `right`

</details>

</details>

<details>


<summary>

#### `tableVisualizatio` (object)

</summary>

Properties of the `tableVisualizatio` object:

|property|description|type|required|
|---|---|---|---|
|calculation|undefined|string|true|
|metricFormulaName|undefined|string|false|
|type|undefined|string|true|
|maxWidthPixels|undefined|number|true|
|heightPixels|undefined|number|true|
|labelPlacement|undefined|string|true|


<details>


<summary>

##### `calculation` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `columnPercentMax`
* `columnPercentTotal`
* `rowPercentMax`
* `rowPercentTotal`

</details>

<details>


<summary>

##### `metricFormulaName` (string)

</summary>

</details>

<details>


<summary>

##### `type` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `bar`

</details>

<details>


<summary>

##### `maxWidthPixels` (number, required)

</summary>

</details>

<details>


<summary>

##### `heightPixels` (number, required)

</summary>

</details>

<details>


<summary>

##### `labelPlacement` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `floating`
* `none`
* `right`

</details>

</details>

</details>

<details>


<summary>

#### `tableCellFormatting` (array)

</summary>

Cell formatting for table or pivot charts

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

#### `tableCellFormattin` (object)

</summary>

Properties of the `tableCellFormattin` object:

|property|description|type|required|
|---|---|---|---|
|calculation|undefined|string|true|
|columnId|undefined|string|false|
|color|undefined|TableColorSpec|true|
|showPercentage|undefined|boolean|false|


<details>


<summary>

##### `calculation` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `columnPercentMax`
* `columnPercentTotal`
* `rowPercentMax`
* `rowPercentTotal`

</details>

<details>


<summary>

##### `columnId` (string)

</summary>

</details>

<details>


<summary>

##### `color` (TableColorSpec, required)

</summary>

</details>

<details>


<summary>

##### `showPercentage` (boolean)

</summary>

</details>

</details>

<details>


<summary>

#### `tableCellFormattin` (object)

</summary>

Properties of the `tableCellFormattin` object:

|property|description|type|required|
|---|---|---|---|
|calculation|undefined|string|true|
|metricFormulaName|undefined|string|false|
|color|undefined|TableColorSpec|true|
|showPercentage|undefined|boolean|false|


<details>


<summary>

##### `calculation` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `columnPercentMax`
* `columnPercentTotal`
* `rowPercentMax`
* `rowPercentTotal`

</details>

<details>


<summary>

##### `metricFormulaName` (string)

</summary>

</details>

<details>


<summary>

##### `color` (TableColorSpec, required)

</summary>

</details>

<details>


<summary>

##### `showPercentage` (boolean)

</summary>

</details>

</details>

</details>

</details>

<details>


<summary>

### `data` (object, required)

</summary>

Information about the data of the saved view.

Properties of the `data` object:

|property|description|type|required|
|---|---|---|---|
|x|One or more columns to use as the x axis in the visualization. (Specifying multiple columns is only applicable when using a Table visualization.)|undefined|true|
|y|One or more columns to use as the y axis in the visualization. (Specifying multiple columns is only applicable when using a Table visualization.)|undefined|true|
|breakout|Specifies a color breakout to display in the visualization.|object|false|
|trellis|Specifies a trellis breakout to display in the visualization.|object|false|
|filters|Specifies filters that are applied by default in this view.|array|false|
|sort|Specifies column sorts for tables.|array|false|


<details>


<summary>

#### `x` (, required)

</summary>

One or more columns to use as the x axis in the visualization. (Specifying multiple columns is only applicable when using a Table visualization.)

</details>

<details>


<summary>

#### `y` (, required)

</summary>

One or more columns to use as the y axis in the visualization. (Specifying multiple columns is only applicable when using a Table visualization.)

</details>

<details>


<summary>

#### `breakout` (object)

</summary>

Specifies a color breakout to display in the visualization.

Properties of the `breakout` object:

|property|description|type|required|
|---|---|---|---|
|columnId|The column identifier of the column used for the breakout.|string|true|
|groups|The list of values to group by.|array|true|


<details>


<summary>

##### `columnId` (string, required)

</summary>

The column identifier of the column used for the breakout.

</details>

<details>


<summary>

##### `groups` (array, required)

</summary>

The list of values to group by.

The object is an array with all elements of the type `object`.

The array object has the following properties:

|property|description|type|required|
|---|---|---|---|
|key|The value to group by.|null,string,number,boolean|true|
|index|The ordering to use when displaying this group (starting with 0).|number|false|
|color|The color of this breakout group|null,string|false|


<details>


<summary>

###### `key` (null,string,number,boolean, required)

</summary>

The value to group by.

</details>

<details>


<summary>

###### `index` (number)

</summary>

The ordering to use when displaying this group (starting with 0).

</details>

<details>


<summary>

###### `color` (null,string)

</summary>

The color of this breakout group

</details>

</details>

</details>

<details>


<summary>

#### `trellis` (object)

</summary>

Specifies a trellis breakout to display in the visualization.

Properties of the `trellis` object:

|property|description|type|required|
|---|---|---|---|
|columnId|The column identifier of the column used for the breakout.|string|true|
|showOther|If true, will collect any values not in `groups` under an "Other" group. Defaults to `true`.|boolean|false|
|groups|The list of values to group by.|array|true|


<details>


<summary>

##### `columnId` (string, required)

</summary>

The column identifier of the column used for the breakout.

</details>

<details>


<summary>

##### `showOther` (boolean)

</summary>

If true, will collect any values not in `groups` under an "Other" group. Defaults to `true`.

</details>

<details>


<summary>

##### `groups` (array, required)

</summary>

The list of values to group by.

The object is an array with all elements of the type `object`.

The array object has the following properties:

|property|description|type|required|
|---|---|---|---|
|key|The value to group by.|null,string,boolean|true|


<details>


<summary>

###### `key` (null,string,boolean, required)

</summary>

The value to group by.

</details>

</details>

</details>

<details>


<summary>

#### `filters` (array)

</summary>

Specifies filters that are applied by default in this view.

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

#### `sort` (array)

</summary>

Specifies column sorts for tables.

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

#### `sor` (object)

</summary>

Properties of the `sor` object:

|property|description|type|required|
|---|---|---|---|
|order|undefined|string|true|
|columnId|undefined|string|true|


<details>


<summary>

##### `order` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `asc`
* `desc`

</details>

<details>


<summary>

##### `columnId` (string, required)

</summary>

</details>

</details>

<details>


<summary>

#### `sor` (object)

</summary>

Properties of the `sor` object:

|property|description|type|required|
|---|---|---|---|
|order|undefined|string|true|
|metricFormulaName|undefined|string|true|


<details>


<summary>

##### `order` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `asc`
* `desc`

</details>

<details>


<summary>

##### `metricFormulaName` (string, required)

</summary>

</details>

</details>

</details>

</details>

<details>


<summary>

### `glean` (string, enum, required)

</summary>

The Glean file format version.

This element must be one of the following enum values:

* `1.0`

</details>

<details>


<summary>

### `grn` (string)

</summary>

The persistent identifier for this saved view.

</details>

<details>


<summary>

### `name` (string, required)

</summary>

The user-visible name of this saved view.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this resource, which in this case should always be "saved_view".

This element must be one of the following enum values:

* `saved_view`

</details>

<details>


<summary>

### `model` (string, required)

</summary>

The file path to the data model definition.

</details>

<details>


<summary>

### `hidden` (array)

</summary>

A list of attribute column identifiers to hide in this view.

The object is an array with all elements of the type `string`.

</details>

## `TableColorSpec` (string)

## `PublicDatetimeOrAttributeSpec` (object)

Properties of the `PublicDatetimeOrAttributeSpec` object:

|property|description|type|required|
|---|---|---|---|
|columnId|The column identifier of the column.|string|true|
|granularity|Which granularity to use when aggregating data, if this is a datetime column.|string|false|
|bins|Specifies binning options for a numeric column.|object|false|


<details>


<summary>

### `columnId` (string, required)

</summary>

The column identifier of the column.

</details>

<details>


<summary>

### `granularity` (string, enum)

</summary>

Which granularity to use when aggregating data, if this is a datetime column.

This element must be one of the following enum values:

* `day`
* `hour`
* `minute`
* `month`
* `quarter`
* `second`
* `week`
* `year`

</details>

<details>


<summary>

### `bins` (object)

</summary>

Specifies binning options for a numeric column.

Properties of the `bins` object:

|property|description|type|required|
|---|---|---|---|
|binWidth|The bin width for grouping data from this column.|number|true|
|binsEnabled|If binsEnabled is omitted, bins will still be enabled.|boolean|false|


<details>


<summary>

#### `binWidth` (number, required)

</summary>

The bin width for grouping data from this column.

</details>

<details>


<summary>

#### `binsEnabled` (boolean)

</summary>

If binsEnabled is omitted, bins will still be enabled.

</details>

</details>

## `PublicSourceDataTableSpec` (object)

Properties of the `PublicSourceDataTableSpec` object:

|property|description|type|required|
|---|---|---|---|
|visualization|undefined|object|true|
|data|undefined|object|true|
|glean|The Glean file format version.|string|true|
|grn|The persistent identifier for this saved view.|string|false|
|name|The user-visible name of this saved view.|string|true|
|type|The type of this resource, which in this case should always be "saved_view".|string|true|
|model|The file path to the data model definition.|string|true|
|hidden|A list of attribute column identifiers to hide in this view.|array|false|


<details>


<summary>

### `visualization` (object, required)

</summary>

Properties of the `visualization` object:

|property|description|type|required|
|---|---|---|---|
|chartType|undefined|string|true|


<details>


<summary>

#### `chartType` (string, enum, required)

</summary>

This element must be one of the following enum values:

* `source_data_table`

</details>

</details>

<details>


<summary>

### `data` (object, required)

</summary>

Properties of the `data` object:

|property|description|type|required|
|---|---|---|---|
|y|A metric, if specified, that will be used in the metric on the sidebar.|undefined|undefined|
|limit|Specifies how many records to load and show. Only supported by the source_data_table visualization.|number|undefined|
|filters|Specifies filters that are applied by default in this view.|array|undefined|


<details>


<summary>

#### `y`

</summary>

A metric, if specified, that will be used in the metric on the sidebar.

</details>

<details>


<summary>

#### `limit` (number)

</summary>

Specifies how many records to load and show. Only supported by the source_data_table visualization.

</details>

<details>


<summary>

#### `filters` (array)

</summary>

Specifies filters that are applied by default in this view.

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

</details>

<details>


<summary>

### `glean` (string, enum, required)

</summary>

The Glean file format version.

This element must be one of the following enum values:

* `1.0`

</details>

<details>


<summary>

### `grn` (string)

</summary>

The persistent identifier for this saved view.

</details>

<details>


<summary>

### `name` (string, required)

</summary>

The user-visible name of this saved view.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this resource, which in this case should always be "saved_view".

This element must be one of the following enum values:

* `saved_view`

</details>

<details>


<summary>

### `model` (string, required)

</summary>

The file path to the data model definition.

</details>

<details>


<summary>

### `hidden` (array)

</summary>

A list of attribute column identifiers to hide in this view.

The object is an array with all elements of the type `string`.

</details>