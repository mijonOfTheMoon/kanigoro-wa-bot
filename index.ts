process.chdir(__dirname);
if (!process.env.npm_package_name) {
    process.env.npm_package_name = 'bot-wa-kanigoro';
    process.env.npm_package_version = '1.0.0';
}

import qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';
import path from 'path';
import { ERROR_REPLY, FIRST_TRIGGER_MESSAGE, FIRST_TRIGGER_REPLY, KV } from './constants';

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: path.join(process.cwd(), '.wwebjs_auth')
    })
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
  const { id: { id }, from } = message
  console.log(`[${id}][${from}] Received message: ${message.body} `);
  if (message.body === FIRST_TRIGGER_MESSAGE) {
    console.log(`[${id}][${from}] Responding with first trigger reply.`);
    message.reply(FIRST_TRIGGER_REPLY);
    return;
  }

  const reply = KV[message.body];
  if (reply) {
    console.log(`[${id}][${from}] Responding with reply: ${reply}`);
    message.reply(reply);
    return;
  }

  if (!reply) {
    console.log(`[${id}][${from}] Responding with error reply.`);
    message.reply(ERROR_REPLY);
    return;
  }
});

client.initialize();
