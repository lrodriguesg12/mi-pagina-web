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
    <div className="flex flex-col items-center m-[50px]">
      <p className="text-pink-200">Ya sé que no es responsive :(</p>
      <div className="max-w-6xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
        <div className="bg-gray-50 rounded-xl m-[5rem] mr-[0px] pt-10 justify-items-center w-[60%] mx-auto rounded-r-none">
          <h1 className="text-center text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Mis aficiones</h1>
		    				<div className="mx-auto w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
		    				<p className="pt-8 text-md font-['Poppins'] text-justify m-10 mt-0">Mi pasatiempo favorito es perseguir moscas por mi casa y salir a la calle a ladrar a la gente. También me encanta salir al campo y escaparme para ir corriendo a ver animales como vacas, caballos, ovejas, o lo que se cruce. A esos no les ladro porque me da miedo, pero hablamos por telepatía. En casa, me gusta mucho escuchar música con mi dueña. Escuchamos todo tipo de música, desde Boney M., hasta el último disco de Bad Bunny, pero si tuviera que elegir una canción que me describa sería Big Poppa de Notorius B.I.G. 😎. </p>
          <Spotify/>
        </div>
				<div className="w-full lg:w-6/17">
        	<img src="/javito.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
				</div>
      </div>
      <button type="button" className="text-white font-['Raleway'] font-semibold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center"><a href="/..">Volver</a></button>
    </div>
  );
}