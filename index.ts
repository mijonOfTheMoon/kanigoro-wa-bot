import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';
import { FIRST_TRIGGER_MESSAGE, FIRST_TRIGGER_REPLY, KV } from './constants';

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('ready', () => {
  console.log('Client is ready!');
  client.info.pushname = 'Kelurahan Kanigoro Bot';
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('call', call => {
  call.reject();
})

client.on('message', message => {
  if (message.body === FIRST_TRIGGER_MESSAGE) {
    message.reply(FIRST_TRIGGER_REPLY);
    return;
  }

  const reply = KV[message.body];
  if (reply) {
    message.reply(reply);
    return;
  }

  if (!reply) {
    message.reply('Maaf, saya tidak mengerti perintah tersebut. Ketik "mulai" untuk memulai percakapan baru atau pilih layanan yang tersedia.');
    return;
  }
});

client.initialize();
