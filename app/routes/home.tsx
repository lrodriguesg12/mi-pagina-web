import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
// import Calendar from "../components/Calendar"; <-- Para añadir el calendario

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La página de Luci" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
          <h1 className="text-lg md:text-4xl lg:text-7xl bg-gradient-to-r from-orange-400 via-pink-600 to-orange-400 bg-clip-text text-transparent  text-center p-12 font-semibold">Bienvenid@ a mi página</h1>
          <h1 className="text-base  md:text-2xl lg:text-5xl text-orange-600 text-center p-8">🚧 Aún está bajo construcción 🚧</h1>
          <h1 className="text-base md:text-xl lg:text-4xl text-pink-700 text-center p-8">Aquí hay poco que ver...🏗️👷🏽‍♀️</h1>
    </div>
  );
}


// export default function Home() {
//   return <Welcome />;
// }
