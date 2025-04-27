import React, { useState } from "react";

const CalendarAugust2025 = () => {
  const [message, setMessage] = useState("");

  const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  const daysInMonth = 31;
  const firstDay = 4; // Viernes

  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarDays = [...blanks, ...days];

  const handleClick = (day: number) => {
    if (day === 15) {
      setMessage("Recordatorio: ¡felicitar a Lucía!");

      // temporizador para que desaparezca el mensaje
      setTimeout(() => {
        setMessage("");
      }, 2500); // 2500ms
    } else {
      setMessage("");
    }
  };

  return (
    <div className="relative p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      {/* Mensaje superpuesto */}
      {message && (
        <div className="absolute inset-0 bg-pink-100 bg-opacity-70 flex items-center justify-center text-pink-600 font-bold text-lg rounded-xl p-4">
          {message}
        </div>
      )}

      {/* Calendario */}
      <h2 className="text-2xl font-bold text-center mb-4">Agosto 2025</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) =>
          day ? (
            <div
              key={index}
              onClick={() => handleClick(day)}
              className={`w-full aspect-square flex items-center justify-center rounded-lg cursor-pointer transition ${
                day === 15
                  ? "bg-pink-500 text-white font-bold hover:bg-pink-600"
                  : "bg-white-100 hover:bg-pink-200"
              }`}
            >
              {day}
            </div>
          ) : (
            <div key={index}></div>
          )
        )}
      </div>
    </div>
  );
};

export default CalendarAugust2025;
