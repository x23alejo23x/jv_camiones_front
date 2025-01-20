import React, { useState, useEffect } from "react";

const ProductCRUD = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const response = await fetch("http://localhost:4000/productos");

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data || !Array.isArray(data)) {
          throw new Error("La respuesta no es un JSON válido.");
        }

        setCarBrands(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarBrands();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full max-w-[90%] md:max-w-[80%] lg:max-w-[90%] gap-4">
        {loading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="overflow-x-auto w-full bg-gray-100 p-8 rounded-lg">
            {/* Contenedor con fondo gris y padding ajustado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {carBrands.map((car) => (
                <div key={car.id} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md m-4">
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <img
                      src={car.image}
                      alt={car.title}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {car.title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {car.brand}
                    </p>
                    <a
                      href={car.urlFichaTecnica}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 mt-2 inline-block"
                    >
                      Ficha Técnica
                    </a>
                  </div>
                  <div className="p-6 pt-0 flex justify-between">
                    <button
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Más info
                    </button>
                    <button
                      className="mt-4 bg-red-500 text-white py-1 px-4 rounded-lg"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCRUD;
