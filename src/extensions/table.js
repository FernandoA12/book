module.exports = toolbox => {
  const {
    print: { table, colors }
  } = toolbox;

  let tableData = [
    [
      colors.warning('#'),
      colors.warning('Cliente'),
      colors['magenta'](`Host DB`),
      colors['magenta'](`User DB`),
      colors['magenta'](`Pass DB`),
      colors['cyan'](`Host FTP`),
      colors['cyan'](`User FTP`),
      colors['cyan'](`Pass FTP`),
      colors['success'](`Host VPN`),
      colors['success'](`User VPN`),
      colors['success'](`Pass VPN`),
      colors['error'](`Host SSH`),
      colors['error'](`User SSH`),
      colors['error'](`Pass SSH`),
    ]
  ]

  toolbox.table = {
    list: (data) => {
      data.map((value, key) => {
        tableData.push([
          key + 1,
          value.client,
          value[`host_db`],
          value[`user_db`],
          value[`pass_db`],
          value[`host_ftp`],
          value[`user_ftp`],
          value[`pass_ftp`],
          value[`host_vpn`],
          value[`user_vpn`],
          value[`pass_vpn`],
          value[`host_ssh`],
          value[`user_ssh`],
          value[`pass_ssh`],
        ]);
      })
      table(
        tableData,
        { format: 'lean' }
      )
    },

  };
}