import React, { useEffect } from "react";

function FallingHearts() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "💖"; // đổi thành 🌸 nếu muốn hoa
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw"; // vị trí ngẫu nhiên ngang
      heart.style.fontSize = Math.random() * 20 + 20 + "px"; // size 20–40px
      heart.style.top = "-50px"; // bắt đầu từ trên màn hình
      heart.style.animation = "fall 5s linear forwards";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default FallingHearts;
