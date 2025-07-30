import type { Service } from "./types";

export const SERVICES: Service[] = [
  {
    key: 1,
    title: "Kependudukan & Identitas",
    children: [
      {
        key: "1a",
        title: "Membuat KTP",
        requirements: [
          "Pengantar RT",
          "KTP lama asli dan fotokopi",
          "KK asli dan fotokopi",
          "Foto 3×4 (3 lembar, berwarna)",
        ]
      },
      {
        key: "1b",
        title: "Membuat KK",
        requirements: [
          "Pengantar RT",
          "KTP Ayah dan Ibu",
          "Surat Nikah",
          "KK asli dan fotokopi",
          "Surat kelahiran dari bidan",
          "KTP 2 saksi",
        ]
      },
      {
        key: "1c",
        title: "Keterangan Kelahiran",
        requirements: [
          "Pengantar RT",
          "KTP Ayah dan Ibu",
          "Surat Nikah",
          "KK asli dan fotokopi",
          "Surat kelahiran dari bidan",
          "KTP 2 saksi",
        ]
      },
      {
        key: "1d",
        title: "Domisili",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Surat keterangan boro",
        ]
      },
      {
        key: "1e",
        title: "Cerai",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Akta cerai asli dan fotokopi",
        ]
      },
      {
        key: "1f",
        title: "Kematian",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Surat keterangan kematian dari RS",
          "KTP 2 saksi",
        ]
      }
    ]
  },
  {
    key: 2,
    title: "Surat Keterangan Umum",
    children: [
      {
        key: "2a",
        title: "SKCK",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Foto 4×6 (2 lembar)",
          "Foto 3×4 (1 lembar, background merah)",
        ]
      },
      {
        key: "2b",
        title: "Surat Boro",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Foto 4×6 (2 lembar)",
          "Foto 3×4 (1 lembar)",
          "Data alamat tujuan",
        ]
      },
      {
        key: "2c",
        title: "Keterangan BSM Sekolah",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data alamat sekolah",
        ]
      },
      {
        key: "2d",
        title: "Keterangan Pendatang",
        requirements: [
          "Pengantar RT",
          "Surat keterangan dari Capil (jika luar kota)",
          "Surat keterangan pindah tempat dari desa",
          "Foto 4×6 (1 lembar)",
        ]
      },
      {
        key: "2e",
        title: "SKTM",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data kepemilikan tanah",
          "Foto rumah",
          "SKM",
          "Surat pernyataan bermaterai",
          "Jamkesmas",
        ]
      },
      {
        key: "2f",
        title: "Surat Kehilangan",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data kehilangan",
        ]
      }
    ]
  },
  {
    key: 3,
    title: "Perpindahan & Pendatang",
    children: [
      {
        key: "3a",
        title: "Pindah Tempat",
        requirements: [
          "Pengantar RT",
          "KK asli dan fotokopi",
          "KTP asli dan fotokopi",
          "Foto 4×6 (4 lembar)",
          "Data alamat tujuan",
        ]
      },
      {
        key: "3b",
        title: "Keterangan Pendatang",
        requirements: [
          "Pengantar RT",
          "Surat keterangan dari Capil (jika luar kota)",
          "Surat keterangan pindah tempat dari desa",
          "Foto 4×6 (1 lembar)",
        ]
      },
      {
        key: "3c",
        title: "Domisili",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Surat keterangan boro",
        ]
      },
      {
        key: "3d",
        title: "Surat Boro",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Foto 4×6 (2 lembar)",
          "Foto 3×4 (1 lembar)",
          "Data alamat tujuan",
        ]
      }
    ]
  },
  {
    key: 4,
    title: "Legalitas & Waris",
    children: [
      {
        key: "4a",
        title: "Cerai",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Akta cerai asli dan fotokopi",
        ]
      },
      {
        key: "4b",
        title: "Waris",
        requirements: [
          "Pengantar RT",
          "KTP asli dan fotokopi",
          "KK asli dan fotokopi",
          "SPPT Letter C (asli dan fotokopi)",
          "Materai 6000",
        ]
      },
      {
        key: "4c",
        title: "Kematian",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Surat keterangan kematian dari RS",
          "KTP 2 saksi",
        ]
      },
      {
        key: "4d",
        title: "Surat Kehilangan",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data kehilangan",
        ]
      }
    ]
  },
  {
    key: 5,
    title: "Izin & Usaha",
    children: [
      {
        key: "5a",
        title: "Keterangan Usaha",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Fotokopi SIUP",
          "Jenis usaha",
          "Perjanjian kontrak (jika sewa/kontrak)",
          "Foto usaha",
          "SPPT",
        ]
      },
      {
        key: "5b",
        title: "Pengajuan Kredit",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Jaminan bank",
        ]
      },
      {
        key: "5c",
        title: "Ijin TKI",
        requirements: [
          "Pengantar RT",
          "KTP suami dan istri",
          "KK",
          "Surat rekomendasi",
          "Buku nikah",
          "Materai 6000",
          "Data negara tujuan",
        ]
      },
      {
        key: "5d",
        title: "Ijin Keramaian",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data kegiatan",
        ]
      },
      {
        key: "5e",
        title: "Ijin Tutup Jalan",
        requirements: [
          "Pengantar RT",
          "KTP asli dan fotokopi",
          "KK",
          "Data kegiatan",
          "Gambar peta",
        ]
      }
    ]
  },
  {
    key: 6,
    title: "Kesehatan & Bantuan Sosial",
    children: [
      {
        key: "6a",
        title: "Jampersal",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
        ]
      },
      {
        key: "6b",
        title: "SKTM",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data kepemilikan tanah",
          "Foto rumah",
          "SKM",
          "Surat pernyataan bermaterai",
          "Jamkesmas",
        ]
      },
      {
        key: "6c",
        title: "Keterangan BSM Sekolah",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Data alamat sekolah",
        ]
      }
    ]
  },
  {
    key: 7,
    title: "Pernikahan",
    children: [
      {
        key: "7a",
        title: "Boro Nikah",
        requirements: [
          "Pengantar RT",
          "KTP",
          "KK",
          "Surat lolosan nikah",
          "Foto 4×6 (2 lembar)",
          "Foto 3×4 (1 lembar)",
        ]
      }
    ]
  },
]
