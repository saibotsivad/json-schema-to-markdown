# Glean schema to represent data models.

The schema defines the following properties:

|property|description|type|required|
|---|---|---|---|
|glean|The Glean file format version.|string|true|
|grn|The persistent identifier for this data model.|string|false|
|name|The user-facing name for this data model.|string|true|
|description|The user-facing description for this data model.|string|false|
|type|The type of this resource, which in this case should always be "model".|string|false|
|source|The data source to read from.|undefined|true|
|cols|The columns (metrics, attributes, dates) of the data model.|array|true|


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

The persistent identifier for this data model.

</details>

<details>


<summary>

# `name` (string, required)

</summary>

The user-facing name for this data model.

</details>

<details>


<summary>

# `description` (string)

</summary>

The user-facing description for this data model.

</details>

<details>


<summary>

# `type` (string, enum)

</summary>

The type of this resource, which in this case should always be "model".

This element must be one of the following enum values:

* `model`

</details>

<details>


<summary>

# `source` (, required)

</summary>

The data source to read from.

</details>

<details>


<summary>

# `cols` (array, required)

</summary>

The columns (metrics, attributes, dates) of the data model.

The elements of the array must match *at least one* of the following properties:

<details>


<summary>

# `col` (AttributeColumn)

</summary>

</details>

<details>


<summary>

# `col` (DateColumn)

</summary>

</details>

<details>


<summary>

# `col` (MetricColumn)

</summary>

</details>

<details>


<summary>

# `col` (MetricCountColumn)

</summary>

</details>

<details>


<summary>

# `col` (MetricSqlColumn)

</summary>

</details>

</details>

---

# Sub Schemas

The schema defines the following additional types:

## `AttributeColumn` (object)

Specifies an attribute column.

Properties of the `AttributeColumn` object:

|property|description|type|required|
|---|---|---|---|
|id|The persistent identifier for the column.|string|true|
|type|The type of this column, which in this case should always be "attribute".|string|true|
|physicalName|The name of the column as it appears in the underlying data source.|string|true|
|description|The user-visible description for this column.|string|false|
|name|The user-visible name for this column.|string|false|


<details>


<summary>

### `id` (string, required)

</summary>

The persistent identifier for the column.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this column, which in this case should always be "attribute".

This element must be one of the following enum values:

* `attribute`

</details>

<details>


<summary>

### `physicalName` (string, required)

</summary>

The name of the column as it appears in the underlying data source.

</details>

<details>


<summary>

### `description` (string)

</summary>

The user-visible description for this column.

</details>

<details>


<summary>

### `name` (string)

</summary>

The user-visible name for this column.

</details>

## `DateColumn` (object)

Specifies a date column.

Properties of the `DateColumn` object:

|property|description|type|required|
|---|---|---|---|
|id|The persistent identifier for the column.|string|true|
|type|The type of this column, which in this case should always be "datetime".|string|true|
|description|The user-visible description for this column.|string|false|
|physicalName|The name of the column as it appears in the underlying data source.|string|true|
|primaryDate|Flag indicating whether the column is the primary date. Exactly one datetime column should have this set to true.|boolean|false|
|name|The user-visible name for this column.|string|false|
|aggregationOptions|Optional aggregation settings.|object|false|


<details>


<summary>

### `id` (string, required)

</summary>

The persistent identifier for the column.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this column, which in this case should always be "datetime".

This element must be one of the following enum values:

* `datetime`

</details>

<details>


<summary>

### `description` (string)

</summary>

The user-visible description for this column.

</details>

<details>


<summary>

### `physicalName` (string, required)

</summary>

The name of the column as it appears in the underlying data source.

</details>

<details>


<summary>

### `primaryDate` (boolean)

</summary>

Flag indicating whether the column is the primary date. Exactly one datetime column should have this set to true.

</details>

<details>


<summary>

### `name` (string)

</summary>

The user-visible name for this column.

</details>

<details>


<summary>

### `aggregationOptions` (object)

</summary>

Optional aggregation settings.

Properties of the `aggregationOptions` object:

|property|description|type|required|
|---|---|---|---|
|minGranularity|The minimum granularity a user can select for this column.|string|undefined|
|maxGranularity|The maximum granularity a user can select for this column.|string|undefined|


<details>


<summary>

#### `minGranularity` (string, enum)

</summary>

The minimum granularity a user can select for this column.

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

#### `maxGranularity` (string, enum)

</summary>

The maximum granularity a user can select for this column.

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

</details>

## `MetricColumn` (object)

Specifies a metric column that fetches data from a column in the underlying data source.

Properties of the `MetricColumn` object:

|property|description|type|required|
|---|---|---|---|
|id|The persistent identifier for the column.|string|true|
|type|The type of this column, which in this case should always be "metric".|string|true|
|physicalName|The name of the column as it appears in the underlying data source.|string|true|
|name|The user-visible name for this column.|string|true|
|description|The user-visible description for this column.|string|false|
|aggregate|Specifies how to aggregate data from this column.|string|true|
|formattingOptions|Optional formatting settings for metrics.|MetricFormattingOptions|false|


<details>


<summary>

### `id` (string, required)

</summary>

The persistent identifier for the column.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this column, which in this case should always be "metric".

This element must be one of the following enum values:

* `metric`

</details>

<details>


<summary>

### `physicalName` (string, required)

</summary>

The name of the column as it appears in the underlying data source.

</details>

<details>


<summary>

### `name` (string, required)

</summary>

The user-visible name for this column.

</details>

<details>


<summary>

### `description` (string)

</summary>

The user-visible description for this column.

</details>

<details>


<summary>

### `aggregate` (string, enum, required)

</summary>

Specifies how to aggregate data from this column.

This element must be one of the following enum values:

* `avg`
* `count`
* `count_distinct`
* `max`
* `min`
* `sum`

</details>

<details>


<summary>

### `formattingOptions` (MetricFormattingOptions)

</summary>

Optional formatting settings for metrics.

</details>

## `MetricFormattingOptions` (object)

Optional formatting settings for metrics.

Properties of the `MetricFormattingOptions` object:

|property|description|type|required|
|---|---|---|---|
|fixedDecimals|The number of fixed decimal places to display.|number|undefined|
|commaThousandsSeparators|Whether to use commas to separate thousands. Defaults to true.|boolean|undefined|
|formatAsDollars|If true, the metric wil be formatted with a leading dollar sign.|boolean|undefined|
|formatAsPercent|If true, the metric will be multiplied by 100 and formatted with a trailing % sign.|boolean|undefined|


<details>


<summary>

### `fixedDecimals` (number)

</summary>

The number of fixed decimal places to display.

</details>

<details>


<summary>

### `commaThousandsSeparators` (boolean)

</summary>

Whether to use commas to separate thousands. Defaults to true.

</details>

<details>


<summary>

### `formatAsDollars` (boolean)

</summary>

If true, the metric wil be formatted with a leading dollar sign.

</details>

<details>


<summary>

### `formatAsPercent` (boolean)

</summary>

If true, the metric will be multiplied by 100 and formatted with a trailing % sign.

</details>

## `MetricCountColumn` (object)

Specifies the "row count" metric column.

Properties of the `MetricCountColumn` object:

|property|description|type|required|
|---|---|---|---|
|id|The persistent identifier for this column.|string|true|
|type|The type of this column, which in this case should always be "metric".|string|true|
|name|The user-visible name for this column.|string|true|
|description|The user-visible description for this column.|string|false|
|aggregate|The type of aggregation for this column, which in this case should always be "row_count".|string|true|


<details>


<summary>

### `id` (string, required)

</summary>

The persistent identifier for this column.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this column, which in this case should always be "metric".

This element must be one of the following enum values:

* `metric`

</details>

<details>


<summary>

### `name` (string, required)

</summary>

The user-visible name for this column.

</details>

<details>


<summary>

### `description` (string)

</summary>

The user-visible description for this column.

</details>

<details>


<summary>

### `aggregate` (string, enum, required)

</summary>

The type of aggregation for this column, which in this case should always be "row_count".

This element must be one of the following enum values:

* `row_count`

</details>

## `MetricSqlColumn` (object)

Specifies a metric column that fetches data using a custom SQL aggregation.

Properties of the `MetricSqlColumn` object:

|property|description|type|required|
|---|---|---|---|
|id|The persistent identifier for the column.|string|true|
|type|The type of this column, which in this case should always be "metric".|string|true|
|name|The user-visible name for this column.|string|true|
|description|The user-visible description for this column.|string|false|
|sql|SQL expression defining the column.|string|true|
|formattingOptions|Optional formatting settings for metrics.|MetricFormattingOptions|false|


<details>


<summary>

### `id` (string, required)

</summary>

The persistent identifier for the column.

</details>

<details>


<summary>

### `type` (string, enum, required)

</summary>

The type of this column, which in this case should always be "metric".

This element must be one of the following enum values:

* `metric`

</details>

<details>


<summary>

### `name` (string, required)

</summary>

The user-visible name for this column.

</details>

<details>


<summary>

### `description` (string)

</summary>

The user-visible description for this column.

</details>

<details>


<summary>

### `sql` (string, required)

</summary>

SQL expression defining the column.

</details>

<details>


<summary>

### `formattingOptions` (MetricFormattingOptions)

</summary>

Optional formatting settings for metrics.

</details>