const mailer = require('nodemailer');

module.exports = async (mensagem) => {
  const smtp = mailer.createTransport({
    host: "mail.chipsete.com.br",
    port: 587,
    secure: false,
    auth: {
      user: "douglas@chipsete.com.br",
      pass: "P@##w0rd"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mail = {
    from: "douglas@chipsete.com.br",
    to: "mrlon.mra@gmail.com",
    subject: "Contato pelo Site",
    text: mensagem
  };

  try {
    const response = await smtp.sendMail(mail);
    smtp.close();
    return response;
  } catch (error) {
    smtp.close();
    throw error;
  }
};
