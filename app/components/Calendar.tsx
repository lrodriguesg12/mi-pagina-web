import React from "react";

const Calendar: React.FC = () => {
  const botonDia = () => {
    alert("Recordatorio: ¡Felicitar a Lucía!");
    console.log("¿Qué estás buscando aquí?");
  };

  return (<div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-sm mb-[23px]">
    <h1 className="text-2xl font-bold text-center mb-4 text-pink-900">Agosto 2025</h1>
    <table className="table-fixed w-full border-collapse text-center">
      <thead className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 text-pink-900">
        <tr>
          <th className="w-1/7 py-[13px] text-[16px] rounded-tl-xl">Lun</th>
          <th className="w-1/7 py-[13px] text-[16px]">Mar</th>
          <th className="w-1/7 py-[13px] text-[16px]">Mié</th>
          <th className="w-1/7 py-[13px] text-[16px]">Jue</th>
          <th className="w-1/7 py-[13px] text-[16px]">Vie</th>
          <th className="w-1/7 py-[13px] text-[16px]">Sáb</th>
          <th className="w-1/7 py-[13px] text-[16px] rounded-tr-xl">Dom</th>
        </tr>
      </thead>
      <tbody>
        {/* Semana 1 */}
        <tr>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed"></td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed"></td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed"></td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed"></td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">1</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">2</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">3</td>
        </tr>
        {/* Semana 2 */}
        <tr>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">4</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">5</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">6</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">7</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">8</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">9</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">10</td>
        </tr>
        {/* Semana 3 */}
        <tr>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">11</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">12</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">13</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">14</td>
          <td
           className="py-[13px] text-[16px] bg-pink-300 hover:bg-pink-500 active:bg-white active:text-pink-500 font-extrabold cursor-pointer" 
           onClick={botonDia}>15</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">16</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">17</td>
        </tr>
        {/* Semana 4 */}
        <tr>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">18</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">19</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">20</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">21</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">22</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">23</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">24</td>
        </tr>
        {/* Semana 5 */}
        <tr>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">25</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">26</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">27</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">28</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">29</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">30</td>
          <td className="py-[13px] text-[16px] border border-pink-300 hover:bg-pink-200 font-semibold cursor-not-allowed">31</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Calendar;
