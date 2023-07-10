const mailer = require('nodemailer');

module.exports = (mensagem) => {
  const smtp = mailer.createTransport({
    host: "smtp.terra.com.br",
    port: 587,
    secure: false,
    auth: {
      user: "segiocarreiro@terra.com.br",
      pass: "d06m06"
    },
    requireTLS: true, // Habilita o STARTTLS
    tls: {
      ciphers: 'SSLv3'
    }
  });

  const mail = {
    from: "segiocarreiro@terra.com.br",
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
      });
  });
};
