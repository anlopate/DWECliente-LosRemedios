var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'analopezatero@gmail.com', // Cuenta que se usa para el envío
      pass: '19800718'  // Poner password
    }
  });
  
  var mailOptions = {
    from: 'analopezatero@gmail.com', // Correo remitente
    to: 'ana.atero@hotmail.com', // Correo destino
    subject: 'Enviando correo desde Node.js',
    html: '<h1>Hola desde Node.js</h1>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });