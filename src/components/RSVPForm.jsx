import { useState } from "react";

function RSVPForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${name}, bạn đã ${attending ? "xác nhận tham dự" : "không tham dự"}.`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-80">
      <h2 className="text-xl font-semibold text-pink-700 mb-4">Xác nhận tham dự</h2>

      <input
        type="text"
        placeholder="Tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-3"
        required
      />

      <label className="flex items-center gap-2 mb-3">
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
        Tôi sẽ tham dự
      </label>

      <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded w-full">
        Gửi
      </button>
    </form>
  );
}

export default RSVPForm;
