import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Noticia from "~/components/Noticia";
import Ejemplo from "~/components/Ejemplo";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Modificado" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="border border-red-500">
          <h1>Noticias</h1>
          <Ejemplo/>
          {/* Noticias */}
          <section>
            <Noticia titulo="Título 1" descripcion="Descripcion 1" gap={4}/>
            <Noticia titulo="Título 2" descripcion="Descripcion 2"/>
            <Noticia titulo="Título 3" descripcion="Descripcion 3"/>
          </section>
    </div>
  );
}

// export default function Home() {
//   return <Welcome />;
// }