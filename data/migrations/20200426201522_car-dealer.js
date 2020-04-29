
exports.up =  async function(knex) {
   await knex.schema.createTable('cars', (table) => {
        table.increments('id')
        table.string('vin', 17).notNull().unique()
        table.string('make').notNull()
        table.string('model').notNull()
        table.integer('year').notNull()
        table.integer('mileage', 7).notNull()
   }) 
  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars');
};
