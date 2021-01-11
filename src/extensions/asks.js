module.exports = toolbox => {
  toolbox.asks = [
    {
        type: 'input',
        name: 'client',
        message: 'Nome do Cliente',
    },
    {
        type: 'input',
        name: 'host_db',
        message: 'Host do banco de dados',
    },
    {
        type: 'input',
        name: 'user_db',
        message: 'Usuário do banco de dados',
    },
    {
        type: 'input',
        name: 'pass_db',
        message: 'Senha do banco de dados',
    },
    {
        type: 'input',
        name: 'host_ftp',
        message: 'Host do FTP',
    },
    {
        type: 'input',
        name: 'user_ftp',
        message: 'Usuário do FTP',
    },
    {
        type: 'input',
        name: 'pass_ftp',
        message: 'Senha do FTP',
    },
    {
        type: 'input',
        name: 'host_vpn',
        message: 'Host da VPN',
    },
    {
        type: 'input',
        name: 'user_vpn',
        message: 'Usuário da VPN',
    },
    {
        type: 'input',
        name: 'pass_vpn',
        message: 'Senha da VPN',
    },
    {
        type: 'input',
        name: 'host_ssh',
        message: 'Host do SSH',
    },
    {
        type: 'input',
        name: 'user_ssh',
        message: 'Usuário do SSH',
    },
    {
        type: 'input',
        name: 'pass_ssh',
        message: 'Senha do SSH',
    }
  ]
}