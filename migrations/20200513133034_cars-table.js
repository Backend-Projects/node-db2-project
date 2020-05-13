// "up" are the changes to be made to the db
exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.float('mileage').notNullable();
    tbl.string('VIN', 17).unique().notNullable();
    tbl.boolean('automatic').defaultTo(1);
    tbl.string('title status', 20);
  });
};

// "down" are the changes to be undone
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
