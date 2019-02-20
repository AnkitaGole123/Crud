exports.seed = function seed( knex, Promise ) {

  var tableName = 'users';

  var rows = [

      // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
      
      {
        name: 'Ankita Gole',
        username: 'anku123',
        password: 'helpfull',
        email: 'anku@gmail.com',
    },
    {
        name: 'Swati singh',
        username: 'swati123',
        password: 'hattbe',
        email: 'swati@gmail.com',
    },
    {
        name: 'soni singh',
        username: 'swati1234',
        password: 'hattbebn',
        email: 'soni@gmail.com',
    },

    {
        name: 'deepa sinha',
        username: 'deepa1234',
        password: 'oyebebn',
        email: 'deepa@gmail.com',
    },

  ];

  return knex( tableName )
      // Empty the table (DELETE)
      .del()
      .then( function() {
          return knex.insert( rows ).into( tableName );
      });

};