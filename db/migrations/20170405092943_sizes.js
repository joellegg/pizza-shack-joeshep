
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sizes', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('sizes').notNullable()
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('sizes')
