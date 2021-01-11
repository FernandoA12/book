const command = {
  name: 'list',
  description: 'Lista os cadastros',
  run: async toolbox => {
    const {
      table: { list },
      database: { data }
    } = toolbox;
    
    list(data);
  }
}
module.exports = command