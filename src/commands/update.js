const logSymbol = require("log-symbols");
const command = {
  name: 'update',
  description: 'Altera um cadastro',
  run: async toolbox => {
    const {
      parameters: { first, options },
      print: { warning, success, info },
      database: { data, store }
    } = toolbox;
    // Opções vaĺidas
    const optionsDefault = [
      'client',
      'host_db',
      'user_db',
      'pass_db',
      'host_ftp',
      'user_ftp',
      'pass_ftp',
      'host_vpn',
      'user_vpn',
      'pass_vpn',
      'host_ssh',
      'user_ssh',
      'pass_ssh'
    ]
    // VERIFICA O ID
    if (!first) return warning(`${logSymbol.warning} ID DO CLIENTE É OBRIGATÓRIO!`)
    // VALIDAÇÃO DE OPTIONS
    if (Object.keys(options).length === 0) {
      warning(`${logSymbol.warning} OBRIGATÓRIO SELECINAR UMA CHAVE`)
      // LISTA DE OPTIONS VALIDAS
      optionsDefault.map(value => {
        info(`${logSymbol.info} ${value}`)
      })
      return
    } else {
      Object.keys(options).map(value => {
        if (!optionsDefault.includes(value)) {
          warning(`${logSymbol.warning} CHAVE INVÁLIDA`)
          // LISTA DE OPTIONS VALIDAS
          optionsDefault.map(value => {
            info(`${logSymbol.info} ${value}`)
          })
          return
        }
      })
    }
    let position = data[first-1];
    Object.keys(options).map(key => position = { ...position,  [key]: options[key] })
    data[first-1] = position;

    store(data)

    success(`${logSymbol.success} REGISTRO ALTERADO COM SUCESSO`);
  }
}

module.exports = command