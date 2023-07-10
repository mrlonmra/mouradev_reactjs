const mailer = require('nodemailer');

module.exports = (mensagem) => {
  const smtp = mailer.createTransport({ // Configura os parâmetros de conexão com servidor.
    host: "mail.chipsete.com.br",
    port: 587,
    secure: false,
    auth: {
      user: "douglas@chipsete.com.br",
      pass: "P@##w0rd"
    },
  tls:{
      rejectUnauthorized:false
  }
  });

  const mail = { // Define informações pertinentes ao E-mail que será enviado
  from: "douglas@chipsete.com.br",
  to: "mrlon.mra@gmail.com",
  subject: "Contato pelo Site",
  text: mensagem
  };

  return new Promise((resolve, reject) => {
    smtp.sendMail(mail)
      .then(response => {
        smtp.close();
        return resolve(response);
    })
    .catch(error => {
      smtp.close();
      return reject(error); 
    })
  })
}
