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
    <>
      <h1 className="text-5xl">Mi página web</h1>
      <h3 className="text-pink-400" >Creado el 9 de abril de 2025</h3>
      <p>En la rama newVersion</p>
    </>
  );
}


// export default function Home() {
//   return <Welcome />;
// }
