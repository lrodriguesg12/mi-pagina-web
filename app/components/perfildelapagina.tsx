import React from 'react'

const perrito = () => {
    console.log("¿A que es bonito?"); //mensaje que aparece por consola cuando haces click en la foto
  };

export default function Perfildelapagina() {
	return (
			<div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
				<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
					<div className="p-4 md:p-12 text-center lg:text-left">
						<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url(/javichuuu.jpg)]"></div>
						<h1 className="text-3xl font-bold pt-8 lg:pt-0 font-['Cal_Sans'] bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent w-[42%]">Hola, soy Javi</h1>
						<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-pink-500 opacity-25"></div>
						<p className="pt-8 text-md font-['Poppins'] text-justify">Soy un cruce de Border Collie con Beagle. Nací en Valdehúncar hace 5 años, con un montón de hermanos, todos distintos entre nosotros. Tuve la suerte de que mi dueña me adoptó junto con mi hermana Bruja, que se fue con su hermana. Me encanta comer, a lo mejor por eso dicen que estoy gordo... Y morder los muebles jeje. Me paso casi todo el día durmiendo en el sillón agustito, menos si pasa alguien por debajo de mi ventana, lo cual es una amenaza enorme y tengo que ladrar, ¡para que se enteren todos!</p>
					</div>
				</div>
				{/* Aquí escuchamos si se ha hecho click en la foto con onClick, e indicamos qué hará (función perrito) */}
				<div className="w-full lg:w-2/5"
					onClick={perrito}>
					<img src="/javichuuu.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
				</div>
			</div>
	)
}
