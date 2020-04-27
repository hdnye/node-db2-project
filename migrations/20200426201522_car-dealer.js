
exports.up =  async function(knex) {
   await knex.schema.createTable('car-dealer', (table) => {
        table.increments('id')
        table.text('vin').notNull().unique()
        table.text('make').notNull()
        table.text('model').notNull()
        table.integer('miles').notNull()
   }) 
  
};

exports.down = function(knex) {
  
};
