import type { Route } from "./+types/home";
import Spotify from "../components/Spotify"; // <-- Para añadir una canción de spotify

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La página de Luci" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Aficiones() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-50 rounded-xl m-[5rem] pt-10 justify-items-center w-[60%] mx-auto">
        <h1 className="text-center text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Mis aficiones</h1>
		  				<div className="mx-auto w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
		  				<p className="pt-8 text-md font-['Poppins'] text-justify m-10 mt-0">Mi pasatiempo favorito es perseguir moscas por mi casa y salir a la calle a ladrar a la gente. También me encanta salir al campo y escaparme para ir corriendo a ver animales como vacas, caballos, ovejas, o lo que se cruce. A esos no les ladro porque me da miedo, pero hablamos por telepatía. Me gusta mucho estar con gente y que me hagan mimos, aunque sólo un ratito y luego me voy porque ya soy mayorcito. Cuando mi dueña está en casa, me voy a dormir la siesta con ella a su habitación, porque como duerme tanto nadie me molesta jeje. Cuando me dejan solo, me cuelo sigilosamente en la habitación de ella a robarle las zapatillas, lo malo es que como casi siempre se le olvida algo y tiene que volver, me pilla in fraganti. Lo bueno es que nunca le duran mucho los enfados y cuando estamos solos me lo paso muy bien escuchando música con ella.
              <br/>Escuchamos todo tipo de música, desde Boney M., hasta el último disco Bad Bunny, pero si tuviera que elegir una canción que me describa sería Big Poppa de Notorius B.I.G., porque yo sí que soy un true player 😎. </p>
        <Spotify/>
      </div>
      <button type="button" className="text-white font-['Raleway'] font-semibold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center"><a href="/..">Volver</a></button>
    </div>
  );
}