/**
 * Model property options specific to MySQL
 */
export interface MysqlConnectorPropertyOptions30 {
    /**
     * Override for default column name
     */
    columnName?: string;
    /**
     * MySQL datatype@see
     */
    dataType?: "INT" | "TINYINT" | "SMALLINT" | "MEDIUMINT" | "BIGINT" | "FLOAT" | "DOUBLE" | "DECIMAL" | "DATE" | "DATETIME" | "TIMESTAMP" | "TIME" | "YEAR" | "CHAR" | "VARCHAR" | "BLOB" | "TINYBLOB" | "MEDIUMBLOB" | "LONGBLOB";
    /**
     * size for varchar, int, etc.
     */
    dataLength?: number;
    nullable?: "Y" | "N";
}
declare namespace localhost_8090 {
    /**
     * Defines a single loopback model in a json file.  @see https://docs.strongloop.com/display/public/APIC/Model+definition+JSON+file
     */
    export interface LoopbackModelDefinitionJson {
        /**
         * Model name.By convention, uppercase first letter (e.g. `Customer`)
         */
        name: string;
        description?: string | string[];
        /**
         * Plural form of the model name.
         * **Optional**: Defaults to plural of name property using standard English conventions.
         * 
         */
        plural?: string;
        /**
         * Name of another model that this model extends. The model will "inherit" properties and methods of the base model.To exclude properties from base model set them to `null` (@see https://docs.strongloop.com/display/APIC/Model+definition+JSON+file#ModeldefinitionJSONfile-Excludepropertiesfrombasemodel )
         */
        base?: string;
        idInjection?: boolean;
        http?: {
            /**
             * Customized HTTP path for REST endpoints of this model.
             */
            path?: string;
        };
        /**
         * A hidden property is not sent in the JSON data in the application's HTTP response.  The property value is an array of strings, and each string in the array must match a property name defined for the model.
         */
        hidden?: string[];
        /**
         * Specifies whether the model accepts only predefined properties or not. One of:
         * * `true`: Only properties defined in the model are accepted. Use if you want to ensure the model accepts only predefined properties.
         * * `false`: The model is an open model and accepts all properties, including ones not predefined in the model. This mode is useful to store free-form JSON data to a schema-less database such as MongoDB.
         * * `"validate"`: The unknown properties will be reported as validation errors.
         * * `"throw"`: Throws an exception if properties not defined for the model are used in an operation.
         * 
         * **Optional**. Defaults to `false` unless the data source is backed by a relational database such as Oracle or MySQL.
         * 
         */
        strict?: "true" | "false" | "validate" | "throw";
        options?: {
            idInjection?: boolean;
            /**
             * By default, the [`upsert()`](http://apidocs.strongloop.com/loopback/#persistedmodel-upsert) method (also known as `updateOrCreate()` ) does not enforce valid model data. Instead, it logs validation errors to the console. This is not optimal, but necessary to preserve backwards compatibility with older 2.x versions.
             * 
             * * `true` : ensure that `upsert()` returns an error when validation fails. The next major version of LoopBack will enable this option (set the property to true) by default.
             * * `false` to prevent `upsert()` from calling any validators at all.
             * 
             * By default, `upsert()` calls all validators and reports any validation errors to the console log.
             * 
             */
            validateUpsert?: boolean;
        };
        /**
         * The properties key defines one or more  properties, each of which is an object that has keys described in the following table.
         */
        properties?: {
            [name: string]: {
                /**
                 * Default value for the property. The type must match that specified by `type`.
                 */
                default?: any;
                /**
                 * A name of the function to call to set the default value for the property. Must be one of:
                 * 
                 * * `"guid"`: generate a new globally unique identifier (GUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuid"`: generate a new universally unique identifier (UUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuidv4"`: generate a new universally unique identifier using the UUID version 4 algorithm.
                 * * `"now"`: use the current date and time as returned by new `Date()`
                 * 
                 * NOTE: For discussion of providing additional options, see [LoopBack issue 292](https://github.com/strongloop/loopback/issues/292) on GitHub.
                 * 
                 */
                defaultFn?: string;
                description?: string | string[];
                /**
                 * **DEPRECATED** Use `description` instead
                 */
                doc?: string;
                /**
                 * Set the id property of the option to true to explicitly set this property as an id. Must be one of:
                 * 
                 * * `true`: the property is an ID.
                 * * `false`: (or any value that converts to false): the property is not an ID (default).
                 * * Positive number, such as 1 or 2: the property is the index of a composite ID.
                 * 
                 * See https://docs.strongloop.com/display/public/APIC/Model+definition+JSON+file#ModeldefinitionJSONfile-Idproperty
                 * 
                 */
                id?: boolean;
                 | number;
                /**
                 * Can be any type described in [LoopBack types](https://docs.strongloop.com/display/APIC/LoopBack+types).
                 */
                type: "any" | "Array" | "Boolean" | "Buffer" | "Date" | "GeoPoint" | "null" | "Number" | "Object" | "String";
                /**
                 * Whether a value for the property is required. If true, then adding or updating a model instance requires a value for the property.
                 * 
                 * Default is `false`.
                 */
                required?: boolean;
                /**
                 * Length of string properties
                 */
                length?: number;
                mysql?: any;
            };
        };
        /**
         * TODO
         */
        relations?: {
            [name: string]: {
                /**
                 * Default value for the property. The type must match that specified by `type`.
                 */
                default?: any;
                /**
                 * A name of the function to call to set the default value for the property. Must be one of:
                 * 
                 * * `"guid"`: generate a new globally unique identifier (GUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuid"`: generate a new universally unique identifier (UUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuidv4"`: generate a new universally unique identifier using the UUID version 4 algorithm.
                 * * `"now"`: use the current date and time as returned by new `Date()`
                 * 
                 * NOTE: For discussion of providing additional options, see [LoopBack issue 292](https://github.com/strongloop/loopback/issues/292) on GitHub.
                 * 
                 */
                defaultFn?: string;
                description?: string | string[];
                /**
                 * **DEPRECATED** Use `description` instead
                 */
                doc?: string;
                /**
                 * Set the id property of the option to true to explicitly set this property as an id. Must be one of:
                 * 
                 * * `true`: the property is an ID.
                 * * `false`: (or any value that converts to false): the property is not an ID (default).
                 * * Positive number, such as 1 or 2: the property is the index of a composite ID.
                 * 
                 * See https://docs.strongloop.com/display/public/APIC/Model+definition+JSON+file#ModeldefinitionJSONfile-Idproperty
                 * 
                 */
                id?: boolean;
                 | number;
                /**
                 * Can be any type described in [LoopBack types](https://docs.strongloop.com/display/APIC/LoopBack+types).
                 */
                type: "any" | "Array" | "Boolean" | "Buffer" | "Date" | "GeoPoint" | "null" | "Number" | "Object" | "String";
                /**
                 * Whether a value for the property is required. If true, then adding or updating a model instance requires a value for the property.
                 * 
                 * Default is `false`.
                 */
                required?: boolean;
                /**
                 * Length of string properties
                 */
                length?: number;
                mysql?: any;
            };
        };
        /**
         * TODO
         */
        acls?: {
            [name: string]: {
                /**
                 * Default value for the property. The type must match that specified by `type`.
                 */
                default?: any;
                /**
                 * A name of the function to call to set the default value for the property. Must be one of:
                 * 
                 * * `"guid"`: generate a new globally unique identifier (GUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuid"`: generate a new universally unique identifier (UUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuidv4"`: generate a new universally unique identifier using the UUID version 4 algorithm.
                 * * `"now"`: use the current date and time as returned by new `Date()`
                 * 
                 * NOTE: For discussion of providing additional options, see [LoopBack issue 292](https://github.com/strongloop/loopback/issues/292) on GitHub.
                 * 
                 */
                defaultFn?: string;
                description?: string | string[];
                /**
                 * **DEPRECATED** Use `description` instead
                 */
                doc?: string;
                /**
                 * Set the id property of the option to true to explicitly set this property as an id. Must be one of:
                 * 
                 * * `true`: the property is an ID.
                 * * `false`: (or any value that converts to false): the property is not an ID (default).
                 * * Positive number, such as 1 or 2: the property is the index of a composite ID.
                 * 
                 * See https://docs.strongloop.com/display/public/APIC/Model+definition+JSON+file#ModeldefinitionJSONfile-Idproperty
                 * 
                 */
                id?: boolean;
                 | number;
                /**
                 * Can be any type described in [LoopBack types](https://docs.strongloop.com/display/APIC/LoopBack+types).
                 */
                type: "any" | "Array" | "Boolean" | "Buffer" | "Date" | "GeoPoint" | "null" | "Number" | "Object" | "String";
                /**
                 * Whether a value for the property is required. If true, then adding or updating a model instance requires a value for the property.
                 * 
                 * Default is `false`.
                 */
                required?: boolean;
                /**
                 * Length of string properties
                 */
                length?: number;
                mysql?: any;
            };
        };
        /**
         * TODO
         */
        scopes?: {
            [name: string]: {
                /**
                 * Default value for the property. The type must match that specified by `type`.
                 */
                default?: any;
                /**
                 * A name of the function to call to set the default value for the property. Must be one of:
                 * 
                 * * `"guid"`: generate a new globally unique identifier (GUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuid"`: generate a new universally unique identifier (UUID) using the computer MAC address and current time (UUID version 1).
                 * * `"uuidv4"`: generate a new universally unique identifier using the UUID version 4 algorithm.
                 * * `"now"`: use the current date and time as returned by new `Date()`
                 * 
                 * NOTE: For discussion of providing additional options, see [LoopBack issue 292](https://github.com/strongloop/loopback/issues/292) on GitHub.
                 * 
                 */
                defaultFn?: string;
                description?: string | string[];
                /**
                 * **DEPRECATED** Use `description` instead
                 */
                doc?: string;
                /**
                 * Set the id property of the option to true to explicitly set this property as an id. Must be one of:
                 * 
                 * * `true`: the property is an ID.
                 * * `false`: (or any value that converts to false): the property is not an ID (default).
                 * * Positive number, such as 1 or 2: the property is the index of a composite ID.
                 * 
                 * See https://docs.strongloop.com/display/public/APIC/Model+definition+JSON+file#ModeldefinitionJSONfile-Idproperty
                 * 
                 */
                id?: boolean;
                 | number;
                /**
                 * Can be any type described in [LoopBack types](https://docs.strongloop.com/display/APIC/LoopBack+types).
                 */
                type: "any" | "Array" | "Boolean" | "Buffer" | "Date" | "GeoPoint" | "null" | "Number" | "Object" | "String";
                /**
                 * Whether a value for the property is required. If true, then adding or updating a model instance requires a value for the property.
                 * 
                 * Default is `false`.
                 */
                required?: boolean;
                /**
                 * Length of string properties
                 */
                length?: number;
                mysql?: any;
            };
        };
        mysql?: any;
    }
    /**
     * Model options specific to MySQL
     */
    export interface MysqlConnectorModelOptionsJson {
        table?: string;
    }
}
