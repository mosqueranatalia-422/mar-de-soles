import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import whatsapp from "../assets/img/whatsapp.png";

const Opiniones = () => {
  const [opiniones, setOpiniones] = useState([]);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("opiniones")) || [];
    setOpiniones(data);
  }, []);

  const handleLike = (index) => {
    setLikes((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const handleDislike = (index) => {
    setDislikes((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  return (
    <div className="font-[Poppins] text-black bg-[#fffafc] min-h-screen">
      <Header />

      <main className="flex flex-col items-center justify-center py-8 px-4">
        <h2 className="text-2xl font-semibold text-[#ef45a8] mb-6 text-center">
          Opiniones de nuestros clientes 💬
        </h2>

        {opiniones.length === 0 ? (
          <p className="text-gray-600 text-sm">
            Aún no hay opiniones. Sé el primero en dejar la tuya 📝
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {opiniones.map((op, i) => (
              <div
                key={i}
                className="bg-[#ffebf9] border border-pink-200 rounded-xl shadow-md w-[250px] p-4 text-center hover:shadow-lg transition-all duration-300"
              >
                <strong className="block text-[#ef45a8] text-base">{op.nombre}</strong>
                <small className="text-gray-500 text-xs">{op.fecha}</small>
                <p className="mt-2 text-gray-700 text-sm">{op.opinion}</p>

                <div className="flex justify-center gap-4 mt-3 text-sm">
                  <button
                    onClick={() => handleLike(i)}
                    className="text-pink-600 hover:text-pink-800 transition"
                  >
                    👍 {likes[i] || 0}
                  </button>
                  <button
                    onClick={() => handleDislike(i)}
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    👎 {dislikes[i] || 0}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />

      {/* Botón flotante WhatsApp */}
      <a
        href="https://w.app/mardsoles_com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[20px] right-[20px] z-[1000]"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-[70px] h-[70px] rounded-full"
        />
      </a>
    </div>
  );
};

export default Opiniones;
