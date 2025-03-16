const Mission = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-blue-700 py-16 text-center text-white"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Nuestra Misión</h1>
        <p className="font-medium max-w-2xl mx-auto text-lg">
          Conoce el propósito que nos impulsa cada día
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <p className="lead text-xl text-gray-700">
            En Belmeny Group, nuestra misión es proporcionar herramientas y
            equipos de alta calidad que permitan a profesionales y entusiastas
            del bricolaje realizar su trabajo de manera eficiente y segura.
          </p>

          <p className="text-gray-600 my-6">
            Nos comprometemos a ofrecer productos innovadores, duraderos y
            accesibles que satisfagan las necesidades de nuestros clientes,
            respaldados por un servicio excepcional y asesoramiento técnico
            especializado.
          </p>

          <p className="text-gray-600 my-6">
            Buscamos ser reconocidos como la estación de herramientas integral
            donde nuestros clientes pueden encontrar todo lo que necesitan en un
            solo lugar, ahorrando tiempo y esfuerzo en sus proyectos.
          </p>

          <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Calidad</h3>
              <p className="mt-2 text-sm text-gray-500">
                Ofrecemos productos que cumplen con los más altos estándares de
                calidad y durabilidad.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Innovación</h3>
              <p className="mt-2 text-sm text-gray-500">
                Constantemente buscamos nuevas tecnologías y soluciones para
                mejorar nuestros productos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Servicio</h3>
              <p className="mt-2 text-sm text-gray-500">
                Brindamos asesoramiento técnico y atención personalizada a todos
                nuestros clientes.
              </p>
            </div>
          </div>

          <p className="text-gray-600 my-6">
            Trabajamos cada día para ser líderes en el mercado de herramientas y
            equipos, manteniendo siempre nuestro compromiso con la excelencia,
            la innovación y la satisfacción del cliente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
