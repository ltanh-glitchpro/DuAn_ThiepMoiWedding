
import React from 'react'

export default function Hero({ coupleName, dateText, bgImage }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage:`url(${bgImage})` }}>
      <div className="backdrop-blur-md bg-white/40 p-8 rounded-xl text-center">
        <h1 className="text-5xl font-serif">{coupleName}</h1>
        <p className="mt-3">{dateText}</p>
        <p className="mt-4 text-sm">Nhấn vào phần RSVP bên dưới để xác nhận tham dự</p>
      </div>
    </section>
  )
}
