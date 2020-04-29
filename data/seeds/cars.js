//dummy data for testing db

exports.seed = async function(knex) {
    //clear any existing data & reset autoincrementing id
    await knex('cars').truncate()
    //set data
    await knex('cars').insert([
        {VIN: '5N3AA08CX7N805813', make: 'Infinity', model: 'QX56', year: 2017, mileage: 15784},
        {VIN: '1B7FL16G8KS036456', make: 'Dodge', model: 'Dakota', year: 1996, mileage: 140265},
        {VIN: '1FTRW12507FB38262', make: 'Ford', model: 'F150', year: 2007, mileage: 97800},
        {VIN: 'WDBHA33G2XF844170', make: 'Mercedes Benz', model: 'C Class', year: 1999, mileage: 87005},
        {VIN: '2T1AE97A4MC092797', make: 'Toyota', model: 'Corolla', year: 1991, mileage: 246897},      
    ])
}