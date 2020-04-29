
exports.up = async function(knex) {
    await knex.schema.alterTable('cars', (table) => {
        table.text('color').notNull();
    })
  
};

exports.down = async function(knex) {
  await knex.schema.alterTable('cars', (table) => {
      table.dropColumn('color');
  })
};
