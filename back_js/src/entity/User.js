const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "User", // Will use table name `category` as default behaviour.
    tableName: "user", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: true
        },
        firstName: {
            type: "varchar"
        },
        lastName: {
            type: "varchar"
        },
        accountNumber: {
            type: "int"
        },
        accountNumber: {
            type: "int"
        },
        accountDigit: {
            type: "int"
        },
        wallet: {
            type: "NUMERIC(10,2)"
        },
        email: {
            type: "varchar"
        },
        password: {
            type: "varchar"
        }

    }
});