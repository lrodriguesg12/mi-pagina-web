import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Calendar from "../components/Calendar"; // <-- Para añadir el calendario
import Spotify from "../components/Spotify"; // <-- Para añadir una canción de spotify
import Perfildelapagina from "~/components/perfildelapagina";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La página de Luci" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center content-evenly gap-20 pt-40">
      <Perfildelapagina/>
      <div id="botones" className="flex justify-center">
        <button type="button" className="text-white font-['Raleway'] font-semibold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"><a href="info">Más info sobre mí</a></button>
        <button type="button" className="text-white font-['Raleway'] font-semibold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"><a href="aficiones">Conoce mis intereses</a></button>
      </div>
    </div>
  );
}


// export default function Home() {
//   return <Welcome />;
// }
