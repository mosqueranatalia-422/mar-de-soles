import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 🔹 Importamos las imágenes desde src/assets/img
import modelo from "../assets/img/modelo2.jpeg";
import descuento from "../assets/img/icono descuento.png";
import candado from "../assets/img/icono candado.png";
import gel from "../assets/img/gel.jpeg";
import bases from "../assets/img/bases.jpeg";
import pestañina from "../assets/img/pestañina.jpeg";
import whatsapp from "../assets/img/whatsapp.png";

export default function Promociones() {
  return (
    <>
      <Header />

      <main className="font-[Poppins] text-black bg-pink-50 min-h-screen">
        {/* Sección principal */}
        <section className="flex flex-col items-center text-center pt-10">
          <img
            className="w-1/4 h-[400px] object-cover rounded-lg shadow-lg"
            src={modelo}
            alt="Modelo"
          />
          <h2 className="text-4xl font-semibold mt-6 text-gray-800">
            ¡Promociones exclusivas para ti!
          </h2>
          <p className="text-2xl mt-2 text-pink-600 font-medium">¡CALIDAD!</p>
        </section>

        {/* Promociones */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-10 my-20">
          <div className="bg-white p-6 rounded-2xl shadow-md w-72 text-center hover:scale-105 transition-transform">
            <img
              className="w-12 mx-auto mb-3"
              src={descuento}
              alt="Descuento"
            />
            <p className="text-lg font-medium text-gray-800">
              10% DE DESCUENTO EN TU PRIMERA COMPRA
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md w-72 text-center hover:scale-105 transition-transform">
            <img className="w-12 mx-auto mb-3" src={candado} alt="Registro" />
            <p className="text-lg font-medium mb-3 text-gray-800">
              10% DE DESCUENTO POR REGISTRARTE EN NUESTRA TIENDA
            </p>
            <button className="bg-pink-600 hover:bg-pink-400 text-white px-4 py-2 rounded-lg font-semibold">
              ¡QUIERO MI DESCUENTO!
            </button>
          </div>
        </section>

        {/* Productos */}
        <section className="flex flex-wrap justify-center gap-8 text-center">
          <article className="bg-white p-5 rounded-2xl shadow-md w-60 hover:shadow-lg transition">
            <img className="w-full rounded-lg" src={gel} alt="Rutina de Ducha" />
            <h4 className="text-lg font-semibold mt-3">RUTINA DE DUCHA</h4>
            <p className="text-pink-600 line-through text-sm mt-1">
              Antes: <span>$110.000</span>
            </p>
            <p className="font-bold text-gray-800 mb-2">Ahora: $90.900</p>
            <button className="bg-pink-100 hover:bg-pink-200 px-4 py-2 rounded-lg">
              Comprar ahora
            </button>
          </article>

          <article className="bg-white p-5 rounded-2xl shadow-md w-60 hover:shadow-lg transition">
            <img className="w-full rounded-lg" src={bases} alt="Base TimeWise" />
            <h4 className="text-lg font-semibold mt-3">BASE TIMEWISE</h4>
            <p className="text-pink-600 line-through text-sm mt-1">
              Antes: <span>$50.000</span>
            </p>
            <p className="font-bold text-gray-800 mb-2">Ahora: $39.900</p>
            <button className="bg-pink-100 hover:bg-pink-200 px-4 py-2 rounded-lg">
              Comprar ahora
            </button>
          </article>

          <article className="bg-white p-5 rounded-2xl shadow-md w-60 hover:shadow-lg transition">
            <img
              className="w-full rounded-lg"
              src={pestañina}
              alt="Pestañina"
            />
            <h4 className="text-lg font-semibold mt-3">PESTAÑINA</h4>
            <p className="text-pink-600 line-through text-sm mt-1">
              Antes: <span>$55.400</span>
            </p>
            <p className="font-bold text-gray-800 mb-2">Ahora: $49.500</p>
            <button className="bg-pink-100 hover:bg-pink-200 px-4 py-2 rounded-lg">
              Comprar ahora
            </button>
          </article>
        </section>

        {/* Botón Ver más */}
        <div className="flex justify-center my-12">
          <button
            onClick={() =>
              (window.location.href =
                "./img/assets/pdf/promociones_mardsoles.pdf")
            }
            className="bg-pink-200 hover:bg-pink-400 text-black px-6 py-2 rounded-lg font-semibold shadow"
          >
            Ver más
          </button>
        </div>

        {/* WhatsApp */}
        <a
          href="https://w.app/mardsoles_com"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-[70px] h-[70px] rounded-full shadow-lg hover:scale-110 transition"
          />
        </a>
      </main>

      <Footer />
    </>
  );
}
