// src/data/certificateData.ts
export type CertificateItem = {
  id: number;
  name: string;
  imageUrl: string;  
  credentialUrl: string;  
  aspect?: string;   
};

export const projects: CertificateItem[] = [
    {
      id: 1,
      name: "The Bits and Bytes of Computer Networking",
      imageUrl: "1",
      credentialUrl: "/certificates/1.pdf",
      aspect: "aspect-[4/3]",
    },
    {
      id: 2,
      name: "System Administration and IT Infrastructure Services",
      imageUrl: "2",
      credentialUrl: "/certificates/2.pdf",
      aspect: "aspect-[4/3]",
    },
    {
      id: 3,
      name: "Belajar Dasar Pemrograman Web",
      imageUrl: "3",
      credentialUrl: "/certificates/3.pdf",
      aspect: "aspect-[16/11]",
    },
    {
      id: 4,
      name: "Belajar Dasar Pemrograman JavaScript",
      imageUrl: "4",
      credentialUrl: "/certificates/4.pdf",
      aspect: "aspect-[16/11]",
    },
    {
      id: 5,
      name: "Belajar Dasar Git dengan GitHub",
      imageUrl: "5",
      credentialUrl: "/certificates/5.pdf",
      aspect: "aspect-[16/11]",
    },
    {
      id: 6,
      name: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
      imageUrl: "6",
      credentialUrl: "/certificates/6.pdf",
      aspect: "aspect-[16/11]",
    },
];