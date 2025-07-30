import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

const client = new Client({

});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('message_create', message => {
  console.log(message.body);
  if (message.body.startsWith('HI')) {
    message.reply('Hello! How can I help you?');
    return;
  }

  if (message.body === 'ping') {
    message.reply('pong');
  }
});

client.initialize();
