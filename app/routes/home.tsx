import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mi nueva página web" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
          <h1 className="text-9xl text-pink-500">Esto es mi nueva página web</h1>
          <h2 className="text-7xl text-blue-500"> En la rama MAIN</h2>
          <h2 className="text-6xl hover:text-yellow-300">Hola</h2>
          <a href="/perfil">
            Navegar a mi perfil
          </a>
    </div>
  );
}


// export default function Home() {
//   return <Welcome />;
// }
