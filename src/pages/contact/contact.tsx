"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Mensaje enviado correctamente");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Coordenadas de la ubicación (ejemplo)
  const location = {
    lat: 10.650293376791547,
    lng: -71.631540495164,
    name: "Ferreteria Belmeny",
  };

  // Número de teléfono para WhatsApp (sin espacios ni caracteres especiales)
  const phoneNumber = "584141234567";
  const displayPhone = "+58 414 123 4567";

  // Correo electrónico
  const email = "contacto@belmeny.com";

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div
        className="bg-blue-700 py-16 text-center text-white"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              {/* Address with Map */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Dirección
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Av. 28 La Limpia, Zulia, Venezuela
                  </p>
                  <div className="mt-3">
                    <a
                      href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Ver en Google Maps
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {/* <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        /> */}
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                <a
                  href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white text-blue-700 px-2 py-2 rounded-md font-medium">
                      Ver en Google Maps
                    </span>
                  </div>
                </a>
              </div>

              {/* Phone with WhatsApp Link */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Teléfono
                  </h3>
                  <p className="mt-1 text-gray-600">
                    <a
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {displayPhone}
                    </a>
                  </p>
                  <div className="mt-2">
                    <p className="font-medium">Contacta con nosotros</p>
                  </div>
                </div>
              </div>

              {/* Email with mailto Link */}
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Correo Electrónico
                  </h3>
                  <p className="mt-1 text-gray-600">
                    <a
                      href={`mailto:${email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {email}
                    </a>
                  </p>
                  <div className="mt-2">
                    <p className="font-medium">Contacta con nosotros</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  Horario de Atención
                </h3>
                <div className="mt-3 space-y-1">
                  <p className="text-gray-600">
                    Lunes - Viernes: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Sábado: 9:00 AM - 3:00 PM</p>
                  <p className="text-gray-600">Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
