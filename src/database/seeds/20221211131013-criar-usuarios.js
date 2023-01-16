const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'John',
        email: 'john@email.com',
        password_hash: await bcryptjs.hash('1234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John 1',
        email: 'john1@email.com',
        password_hash: await bcryptjs.hash('7654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'John 2',
        email: 'john2@email.com',
        password_hash: await bcryptjs.hash('516531', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
