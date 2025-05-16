import type { Route } from "./+types/home";
import Calendar from "../components/Calendar"; // <-- Para añadir el calendario

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La página de Luci" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Info() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-50 rounded-xl mt-[5rem] mb-[2rem] pt-10 justify-items-center w-[60%] mx-auto pb-8">
        <h1 className="text-center text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Sobre Luci</h1>
		  	<div className="mx-auto w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
		  	<p className="pt-8 text-md font-['Poppins'] text-justify m-10 mt-0">Luci es mi dueña. Me adoptó cuando tenía 20 años porque vio una foto mía y se quedó encandilada (normal). Me cuida mucho, y eso significa que no puede darme magdalenas para comer 😔. Pero luego me da jamoncito y se me pasa. A veces me vuelve loco, porque un rato tiene mucha energía y estamos jugando, y al rato se mete a la cama y parece una marmota; aunque ahora que lo pienso, yo soy igual. Siempre está pendiente de si estoy bien, y me da mimos cuando estoy aburrido. Pero a veces es un poco dramática (típico de Leo), por eso me he tenido que hacer un calendario para acordarme de su cumple, ¡no se me vaya a olvidar!</p>
        <Calendar/>
      </div>
      <button type="button" className="text-white font-['Raleway'] font-semibold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center"><a href="/..">Volver</a></button>
    </div>
  );
}