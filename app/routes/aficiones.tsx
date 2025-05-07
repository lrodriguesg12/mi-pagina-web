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
    <div>
      <Spotify />
    </div>
  );
}