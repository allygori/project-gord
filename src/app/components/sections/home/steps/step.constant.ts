export type Step = {
  number: number;
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Konsultasi",
    description: `
      <ul class="text-sm text-brand-100 list-decimal list-outside ml-6 xl:ml-4 mt-2 xl:mt-1">
        <li>Pelanggan dapat menyampaikan kebutuhan gorden yang diinginkan kepada tim kami.</li>
        <li>
          <div>
            <p>Jadwalkan hari dan jam kunjungan</p>
            <p>Waktu survey Senin-Minggu Pukul 09.00-16.00</p>
          </div>
        </li>
        <li>Proses pembayaran biaya survey sebesar <strong>Rp 100.000</strong> (akan menjadi tambahan DP, jika order disepakati)</li>
      </ul>
    `,
  },
  {
    number: 2,
    title: "Survey & Pilih Bahan",
    description: `
      <ul class="text-sm text-brand-100 list-decimal list-outside ml-6 xl:ml-4 mt-2 xl:mt-1">
        <li>Tim survey kami akan membawa sample kain sesuai permintaan pelanggan</li>
        <li>Proses pengukuran</li>
        <li>Pilih bahan</li>
        <li>Perhitungan biaya</li>
      </ul>
    `,
  },
  {
    number: 3,
    title: "Proses Pengerjaan",
    description: `
      <p class="text-sm text-brand-100 ml-2 xl:ml-0 mt-2 xl:mt-1">
        IKA Gorden akan mengerjakan sesuai waktu yang telah disepakati. Umumnya, lama waktu yang diperlukan adalah 7-14 hari (tergantung tingkat kerumitan)
      </p>
    `,
  },
  {
    number: 4,
    title: "Pemasangan",
    description: `
      <ul class="text-sm text-brand-100 list-decimal list-outside ml-6 xl:ml-4 mt-2 xl:mt-1">
        <li>Kami akan menghubungi pelanggan ketika selesai</li>
        <li>Proses penjadwalan pemasangan</li>
        <li>Tim kami akan datang ke lokasi pemasangan sesuai hari dan jam yang disepakati</li>
        <li>Proses pemasangan</li>
        <li>Selesai</li>
      </ul>
    `,
  },
];
