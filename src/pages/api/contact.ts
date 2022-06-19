/* eslint-disable @typescript-eslint/naming-convention */
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';

const email = process.env.MAILADRESS;
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY
    }
  })
);

const mailer = ({ senderMail, name, text }) => {
  const from = email;
  const message = {
    from,
    to: `${email}`,
    subject: `Ei, te chamaram pelo portfolio - ${name}`,
    text,
    replyTo: senderMail
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  try {
    const { senderMail, name, content } = req.body;
    if (senderMail === '' || name === '' || content === '') {
      res.status(403).send();
      return;
    }
    const mailerRes = await mailer({ senderMail, name, text: content });
    res.send(mailerRes);
  } catch (error) {
    res.json({
      error: true,
      message: error.message
    });
  }
};
