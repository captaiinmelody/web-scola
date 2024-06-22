function PrivacyPolicy() {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="max-w-screen-md mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl text-gray-800">
          Kebijakan Privasi Aplikasi Scola
        </h1>
        <p className="text-gray-600 mt-4">
          Berikut adalah kebijakan privasi kami:
        </p>
        <div className="mt-8">
          <h2 className="text-xl text-gray-800 mb-2">
            PENGAKUAN DAN PERSETUJUAN ANDA
          </h2>
          <p className="text-gray-700">
            Anda wajib membaca Kebijakan Privasi ini sebelum mendaftarkan diri
            dan menggunakan Layanan. Dengan mendaftarkan diri dan menggunakan
            setiap Layanan kami, Anda menyatakan bahwa Anda telah membaca,
            memahami dan setuju terhadap ketentuan-ketentuan Kebijakan Privasi
            ini. Pengakuan dan persetujuan Anda terhadap Kebijakan Privasi ini
            juga berkaitan dengan ketentuan yang tercantum berdasarkan Ketentuan
            Penggunaan yang dianggap sebagai satu kesatuan dan tidak dapat
            dipisahkan.
          </p>
          {/* Add other sections in the same way */}
        </div>
        <div className="mt-8 bg-red-500 text-white rounded-md p-4">
          <h2 className="text-lg text-white mb-2">Perubahan</h2>
          <p>
            Harap dicatat bahwa Kebijakan Privasi ini dapat diubah setiap saat
            dari waktu ke waktu dan akan berlaku pada tanggal yang ditentukan
            oleh kami. Setiap perubahan atas Kebijakan Privasi ini akan
            dipublikasikan di Aplikasi atau media lainnya yang dianggap perlu
            oleh kami. Mohon baca dan telusuri Kebijakan Privasi di Situs
            dan/atau Aplikasi secara berkala untuk melihat perubahan-perubahan
            tersebut. Dengan terus menggunakan Layanan kami setelah publikasi
            tersebut atau pemberitahuan dari kami, Anda dianggap setuju terhadap
            perubahan terhadap Kebijakan Privasi ini.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
