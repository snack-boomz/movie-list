/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'Mean Girls', duration: '140 minutes'},
    {id: 2, title: 'Hackers', duration: '100 minutes'},
    {id: 3, title: 'The Grey', duration: '180 minutes'},
    {id: 4, title: 'Sunshine', duration: '720 minutes'},
    {id: 5, title: 'Ex Machina', duration: '83 minutes'},
  ]);
};
