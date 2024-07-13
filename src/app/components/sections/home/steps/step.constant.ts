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
      <ol class="text-sm text-brand-100 list-decimal list-outside ml-6 xl:ml-4 mt-2 xl:mt-1">
        <li>Pelanggan menyampaikan kebutuhan gorden yang diinginkan kepada tim kami. Anda dapat bertanya mengenai model, jenis bahan & jumlah gorden
        </li>
        <li>
          <div>
            <p>Penjadwalan hari dan jam kunjungan</p>
            <p>Waktu survey Senin-Minggu Pukul 09.00-16.00</p>
          </div>
        </li>
        <li>Proses pembayaran biaya survey sebesar <strong>Rp 100.000</strong> (akan menjadi tambahan DP, jika order disepakati)</li>
      </ol>
    `,
  },
  {
    number: 2,
    title: "Survey & Pilih Bahan",
    description: `
      <ol class="text-sm text-brand-100 list-decimal list-outside ml-6 xl:ml-4 mt-2 xl:mt-1">
        <li>Tim survey kami akan membawa <em>sample</em> kain sesuai permintaan pelanggan</li>
        <li>Proses pengukuran</li>
        <li>Pilih bahan</li>
        <li>Perhitungan biaya</li>
      </ol>
    `,
  },
  {
    number: 3,
    title: "Proses Pengerjaan",
    description: `
      <p class="text-sm text-brand-100 ml-2 xl:ml-0 mt-2 xl:mt-1">
        IKA Gorden akan mengerjakan sesuai waktu yang telah disepakati. Umumnya, lama waktu yang diperlukan adalah 5-14 hari, sesuai dengan tingkat kerumitan.
      </p>
    `,
  },
  {
    number: 4,
    title: "Pemasangan",
    description: `
      <ol class="text-sm text-brand-100 list-decimal list-outside ml-6 xl:ml-4 mt-2 xl:mt-1">
        <li>Kami akan menghubungi pelanggan ketika selesai</li>
        <li>Penjadwalan hari dan jam pemasangan</li>
        <li>Tim kami akan datang ke lokasi pemasangan sesuai hari dan jam yang disepakati dan melakukan pemasangan</li>
        <li>Pelunasan pembayaran</li>
        <li>Selesai</li>
      </ol>
    `,
  },
];