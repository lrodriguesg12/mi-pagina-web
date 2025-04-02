import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Esto es mi perfil" }
  ];
}

export default function Perfil() {
  return (
    <div>
          <h1>Esto es el perfil</h1>
    </div>
  );
}
