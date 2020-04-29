
exports.up = async function(knex) {
    await knex.schema.alterTable('car-dealer', (table) => {
        table.text('color');
    })
  
};

exports.down = async function(knex) {
  await knex.schema.alterTable('cars', (table) => {
      table.dropColumn('color');
  })
};
