import type { Service } from "./types";

export const getParentServiceReply = (service: Service) => {
  return `Anda telah memilih layanan: ${service.title}.

Berikut adalah layanan yang tersedia:
${service.children.map((child) => `${child.key}. ${child.title}`).join('\n')}

Silakan pilih layanan dengan mengetikkan nomor yang sesuai. Ketik "layanan ${service.key}a" untuk layanan pertama, "layanan ${service.key}b" untuk layanan kedua, dan seterusnya.

Ketik "mulai" untuk memulai percakapan baru atau pilih layanan lain.`;
}

export const getChildServiceReply = (service: Service, childIndex: number) => {
  const child = service.children[childIndex];
  if (!child) {
    return 'Layanan tidak ditemukan. Silakan pilih layanan yang valid.';
  }

  return `Anda telah memilih layanan: ${service.title} - ${child.title}.

Berikut adalah persyaratan yang diperlukan:
${child.requirements.map(req => `- ${req}`).join('\n')}

Ketik "mulai" untuk memulai percakapan baru atau pilih layanan lain.`;
}
