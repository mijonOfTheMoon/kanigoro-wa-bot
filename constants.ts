import { SERVICES } from './data';
import { getChildServiceReply, getParentServiceReply } from './helper';

export const FIRST_TRIGGER_MESSAGE = "Hai, aku ingin mengetahui layanan yang ada di Kelurahan. Bisakah kamu membantuku?"

export const FIRST_TRIGGER_REPLY = `Selamat datang di layanan WhatsApp Kelurahan Kanigoro!.

Berikut adalah layanan yang tersedia:
${SERVICES.map(service => `${service.key}. ${service.title}`).join('\n')}

Silakan pilih layanan dengan mengetikkan nomor yang sesuai. Ketik "layanan 1" untuk layanan pertama, "layanan 2" untuk layanan kedua, dan seterusnya. Ketik "mulai" untuk memulai percakapan baru.`;

export const ERROR_REPLY = `Maaf, saya tidak mengerti perintah tersebut. Ketik "mulai" untuk memulai percakapan baru atau pilih layanan yang tersedia.`;

export const KV: Record<string, string> = {
  mulai: FIRST_TRIGGER_REPLY,
  "layanan 1": getParentServiceReply(SERVICES[0]),
  "layanan 1a": getChildServiceReply(SERVICES[0], 0),
  "layanan 1b": getChildServiceReply(SERVICES[0], 1),
  "layanan 1c": getChildServiceReply(SERVICES[0], 2),
  "layanan 1d": getChildServiceReply(SERVICES[0], 3),
  "layanan 1e": getChildServiceReply(SERVICES[0], 4),
  "layanan 1f": getChildServiceReply(SERVICES[0], 5),

  "layanan 2": getParentServiceReply(SERVICES[1]),
  "layanan 2a": getChildServiceReply(SERVICES[1], 0),
  "layanan 2b": getChildServiceReply(SERVICES[1], 1),
  "layanan 2c": getChildServiceReply(SERVICES[1], 2),
  "layanan 2d": getChildServiceReply(SERVICES[1], 3),
  "layanan 2e": getChildServiceReply(SERVICES[1], 4),
  "layanan 2f": getChildServiceReply(SERVICES[1], 5),

  "layanan 3": getParentServiceReply(SERVICES[2]),
  "layanan 3a": getChildServiceReply(SERVICES[2], 0),
  "layanan 3b": getChildServiceReply(SERVICES[2], 1),
  "layanan 3c": getChildServiceReply(SERVICES[2], 2),

  "layanan 4": getParentServiceReply(SERVICES[3]),
  "layanan 4a": getChildServiceReply(SERVICES[3], 0),
  "layanan 4b": getChildServiceReply(SERVICES[3], 1),
  "layanan 4c": getChildServiceReply(SERVICES[3], 2),
  "layanan 4d": getChildServiceReply(SERVICES[3], 3),

  "layanan 5": getParentServiceReply(SERVICES[4]),
  "layanan 5a": getChildServiceReply(SERVICES[4], 0),
  "layanan 5b": getChildServiceReply(SERVICES[4], 1),
  "layanan 5c": getChildServiceReply(SERVICES[4], 2),
  "layanan 5d": getChildServiceReply(SERVICES[4], 3),
  "layanan 5e": getChildServiceReply(SERVICES[4], 4),

  "layanan 6": getParentServiceReply(SERVICES[5]),
  "layanan 6a": getChildServiceReply(SERVICES[5], 0),
  "layanan 6b": getChildServiceReply(SERVICES[5], 1),
  "layanan 6c": getChildServiceReply(SERVICES[5], 2),

  "layanan 7": getParentServiceReply(SERVICES[6]),
  "layanan 7a": getChildServiceReply(SERVICES[6], 0),
}
