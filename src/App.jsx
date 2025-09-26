import FallingHearts from "./components/FallingHearts";
import BackgroundMusic from "./BackgroundMusic";
import RSVPForm from "./components/RSVPForm"

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
      <h2 className="text-2xl font-semibold text-pink-600 mb-2">
        Tuấn Anh 💍 Kiều Nhi
      </h2>
      <p className="text-base text-gray-600 mb-8">
        Trân trọng kính mời bạn đến tham dự lễ cưới của chúng tôi
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <p>📅 Ngày: 12/12/2025</p>
        <p>📍 Địa điểm: Nhà hàng Thu Thủy</p>
      </div>

      {/* Form xác nhận tham dự */}
      <RSVPForm />
    </div>
  )
}

export default App
