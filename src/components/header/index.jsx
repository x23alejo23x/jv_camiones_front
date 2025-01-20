import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    brand: "",
    image: "",
    urlFichaTecnica: "",
    feedback: ""
  });

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer una solicitud para enviar los datos
    console.log("Formulario enviado con los siguientes datos:", formData);
    alert("Formulario enviado");
    // Limpiar el formulario después del envío
    setFormData({
      title: "",
      brand: "",
      image: "",
      urlFichaTecnica: "",
      feedback: ""
    });
    setFormVisible(false); // Ocultar el formulario después de enviarlo
  };

  return (
    <div className="flex flex-col items-center justify-start h-auto bg-gray-800 p-4">
      <div className="text-center text-white mb-4 mt-10 w-full">
        <h1 className="text-2xl font-semibold mb-10">Bienvenido</h1>
        <p className="text-lg">Administra y crea productos.</p>
      </div>

      {/* Botón alineado a la derecha debajo del subtítulo */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
        >
            <FontAwesomeIcon icon={faPlus} />

        </button>
      </div>

      {/* Modal */}
      {formVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Formulario de Producto</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                placeholder="Nombre Completo"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <input
                placeholder="Email"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="email"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                required
              />
              <select
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              >
                <option value="product-1">Producto 1</option>
                <option value="product-2">Producto 2</option>
                <option value="product-3">Producto 3</option>
              </select>
              <input
                placeholder="Calificación (1-5)"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
                name="urlFichaTecnica"
                value={formData.urlFichaTecnica}
                onChange={handleInputChange}
                required
              />
              <textarea
                placeholder="Comentarios"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                name="feedback"
                value={formData.feedback || ''}
                onChange={handleInputChange}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-3 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Enviar
              </button>
            </form>
            <button
              onClick={() => setFormVisible(false)}
              className="text-red-500 mt-3 w-full text-center"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
