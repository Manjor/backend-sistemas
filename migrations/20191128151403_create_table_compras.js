
exports.up = function(knex, Promise) {
    return knex.schema.createTable('compras', table =>{
      table.increments('id').primary()
      table.string('resumo').notNull()
      table.string('valorFinal').notNull().unique()
      table.string('pontos')
      table.string('userId')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('compras')
};
