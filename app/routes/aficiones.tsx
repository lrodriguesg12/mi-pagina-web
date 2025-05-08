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
    <div className="mt-50">
    <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-lg shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
          <h1 className="text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 via-pink-600 to-orange-400 bg-clip-text text-transparent">Hola, soy Javi</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
          <p className="pt-8 text-md font-['Poppins'] text-justify">HOLA</p>
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <Spotify/>
      </div>
    </div></div>
  );
}