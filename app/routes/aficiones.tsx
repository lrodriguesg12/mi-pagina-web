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
    <div className="bg-gray-50 rounded-xl m-30 pb-20 pt-20 justify-items-center">
      <h1 className="text-center text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">HOLAAAAAAAAAAA</h1>
						<div className="mx-auto w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
						<p className="pt-8 text-md font-['Poppins'] text-justify m-10 mt-0">HELLOOOOOO</p>
      <Spotify/>
    </div>
  );
}