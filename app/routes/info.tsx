import type { Route } from "./+types/home";
import Calendar from "../components/Calendar"; // <-- Para añadir el calendario

export function meta({}: Route.MetaArgs) {
  return [
    { title: "La página de Luci" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Info() {
  return (
    <div>
        <Calendar />
    </div>
  );
}