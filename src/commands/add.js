const command = {
  name: 'add',
  description: 'Cria um novo cadastro',
  run: async toolbox => {
    const {
      prompt,
      asks,
      filesystem: { exists },
      print: { success },
      database: { store, path, data }
    } = toolbox;
    const responses = await prompt.ask(asks);    
    success('Cliente cadastrado com sucesso!');
    
    if(!exists(path)){
      store(responses);
      return
    }
    store([...data, responses]);
  }
}
module.exports = command