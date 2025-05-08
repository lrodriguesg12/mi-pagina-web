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
    <div className="bg-gray-50 rounded-xl m-30 pb-20 pt-20">
      <h1 className="text-center text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">HOLAAAAAAAAAAA</h1>
						<div className="mx-auto w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
						<p className="pt-8 text-md font-['Poppins'] text-justify m-10 mt-0">Soy un cruce de Border Collie con Beagle. Nací en Valdehúncar hace 5 años, con un montón de hermanos, todos distintos entre nosotros. Tuve la suerte de que mi dueña me adoptó junto con mi hermana bruja, que se fue con mi tía. Me encanta comer, a lo mejor por eso dicen que estoy gordo... Y morder los muebles jeje. Me paso casi todo el día durmiendo en el sillón agustito, menos si pasa alguien por debajo de mi ventana, lo cual es una amenaza enorme y tengo que ladrar para que se enteren todos!</p>
      <Calendar/>
    </div>
  );
}