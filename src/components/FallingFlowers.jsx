import React, { useEffect } from "react";

function FallingFlowers() {
  useEffect(() => {
    const interval = setInterval(() => {
      const flower = document.createElement("img");
      flower.src = "/src/assets/flower.png"; // đường dẫn ảnh hoa
      flower.className = "falling-flower";

      flower.style.left = Math.random() * 100 + "vw"; // vị trí ngẫu nhiên
      flower.style.animationDuration = Math.random() * 3 + 4 + "s"; // thời gian rơi khác nhau
      flower.style.width = Math.random() * 30 + 20 + "px"; // kích thước khác nhau

      document.body.appendChild(flower);

      // xoá hoa khi rơi xong
      setTimeout(() => {
        flower.remove();
      }, 7000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default FallingFlowers;
