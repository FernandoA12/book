const logSymbol = require("log-symbols");
const command = {
  name: 'del',
  description: 'Deletar os cadastros',
  run: async toolbox => {
    const {
      parameters,
      print: { warning, success, error },
      database: { store, data }
    } = toolbox;
    
    if(!parameters.first) return warning(`${logSymbol.warning} ID DO CLIENTE É OBRIGATÓRIO!`)
    if(data.length <= 0) return error(`${logSymbol.error} NENHUM CLIENTE CADASTRADO`)
    if(data.length < parameters.first ) return warning(`${logSymbol.warning} ID DO CLIENTE INVÁLIDO!`)

    store(data.filter((value, key) => key !== parameters.first-1));

    success(`${logSymbol.success} Cliente excluído com sucesso.`)
  }
}
module.exports = command