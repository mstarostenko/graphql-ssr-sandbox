const Schema = use('Schema')

class RoleSchema extends Schema {
    up() {
        this.create('roles', table => {
            table.increments()
            table.timestamps()
            table
                .text('name')
                .notNullable()
                .unique()
            table.text('type').notNullable()
            table.boolean('isLeadLink').notNullable()
            table.boolean('hasTention').notNullable()
        })

        this.create('circles', table => {
            table.increments()
            table.timestamps()
            table
                .text('color')
                .notNullable()
                .unique()
        })

        this.create('roles_circles', table => {
            table
                .integer('roles_id')
                .unsigned()
                .references('id')
                .inTable('roles')
                .notNullable()

            table
                .integer('circles_id')
                .unsigned()
                .references('id')
                .inTable('circles')
                .notNullable()
        })
    }

    down() {
        this.drop('roles_circles')
        this.drop('circles')
        this.drop('roles')
    }
}

module.exports = RoleSchema
