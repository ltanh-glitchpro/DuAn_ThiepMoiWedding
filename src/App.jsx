import FallingHearts from "./components/FallingHearts";
import BackgroundMusic from "./BackgroundMusic";
import RSVPForm from "./components/RSVPForm"

import qrBank from "./assets/QR_Bank.jpg";

function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
      {/* Nhạc nền và nút điều khiển */}
      <BackgroundMusic />
      {/* Hiệu ứng rơi tim */}
      <FallingHearts />
      {/*Nội dung chính của trang */}
      <h1 className="text-4xl font-bold text-pink-700 mb-4">
        Thiệp Cưới
      </h1>
      <div className="flex flex-col items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Tuấn Anh 💍 Kiều Nhi</h2>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="w-1/2 text-center">
            <div className="text-base text-gray-700">Bình Thạnh Đông, An Giang.</div>
          </div>
          <div className="w-1/2 text-center">
            <div className="text-base text-gray-700">Hòa Lạc, An Giang.</div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto mb-8">
        <div className="bg-pink-100 rounded-xl p-4 shadow text-center">
          <p className="text-lg italic text-pink-700 mb-2">"Hạnh phúc sẽ trọn vẹn hơn khi có sự hiện diện và lời chúc phúc của bạn!"</p>
          <p className="text-base text-gray-700 mb-2">Chúng tôi vô cùng hân hoan và trân trọng kính mời bạn đến chung vui cùng gia đình trong ngày trọng đại của hai chúng tôi.</p>
          <p className="text-base text-gray-700">Sự hiện diện của bạn là niềm vinh hạnh và là món quà ý nghĩa nhất đối với chúng tôi!</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center mb-6">
        <p>📅 Ngày: 12/12/2025</p>
        <p>📍 Địa điểm: Nhà hàng Thu Thủy</p>
      </div>

      {/* Form xác nhận tham dự và mã QR chuyển khoản */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 mb-8 w-full max-w-xl">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <RSVPForm />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={qrBank} alt="QR chuyển khoản" className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-lg border border-pink-200 shadow" />
        </div>
      </div>
    </div>
  )
}

export default App
