 const logSymbol = require("log-symbols");
const command = {
  name: 'select',
  description: 'Seleciona um cadastro',
  run: async toolbox => {
    const {
      parameters: { options, first },
      table: { list },
      print: { warning, error, info },
      database: { data }
    } = toolbox;

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
          process.exit(0);
        }
      })
    }    
    const filtered = data.filter(value => value[Object.keys(options)[0]].toLowerCase().match(new RegExp(options[Object.keys(options)[0]].toLowerCase())))
    if(filtered.length <= 0) return error(`${logSymbol.error} NENHUM CLIENTE ENCONTRADO!`)
    list(filtered, first);
  }
}
module.exports = command