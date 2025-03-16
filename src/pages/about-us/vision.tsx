const Vision = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-blue-700 py-16 text-center text-white"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Nuestra Visión</h1>
        <p className="max-w-2xl mx-auto text-lg font-medium">
          Hacia dónde nos dirigimos como empresa
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto">
          <p className="lead text-xl text-gray-700">
            En Belmeny Group, aspiramos a ser reconocidos como el líder
            indiscutible en el mercado de herramientas y equipos, siendo la
            primera opción para profesionales y entusiastas en toda la región.
          </p>

          <div className="my-12 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img
                src="/placeholder.svg?height=400&width=600"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestro futuro
              </h2>
              <p className="text-gray-600 mb-4">
                Visualizamos un futuro donde Belmeny Group sea sinónimo de
                calidad, innovación y servicio excepcional en la industria de
                herramientas y equipos.
              </p>
              <p className="text-gray-600 mb-4">
                Buscamos expandir nuestra presencia a nivel nacional e
                internacional, llevando nuestros productos de alta calidad a más
                profesionales y entusiastas del bricolaje.
              </p>
              <p className="text-gray-600">
                Nos esforzamos por ser pioneros en la adopción de nuevas
                tecnologías y prácticas sostenibles que beneficien tanto a
                nuestros clientes como al medio ambiente.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
            Objetivos estratégicos
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Expansión de mercado
              </h3>
              <p className="text-gray-600">
                Ampliar nuestra red de distribuidores y tiendas propias para
                llegar a más clientes en diferentes regiones.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Innovación continua
              </h3>
              <p className="text-gray-600">
                Invertir en investigación y desarrollo para ofrecer productos
                cada vez más eficientes, seguros y fáciles de usar.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Excelencia en servicio
              </h3>
              <p className="text-gray-600">
                Mejorar constantemente nuestra atención al cliente y soporte
                técnico para garantizar la máxima satisfacción.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Sostenibilidad
              </h3>
              <p className="text-gray-600">
                Implementar prácticas empresariales responsables con el medio
                ambiente y la sociedad.
              </p>
            </div>
          </div>

          <p className="text-gray-600 my-8">
            Con esta visión clara, trabajamos cada día para construir un futuro
            donde Belmeny Group sea reconocido no solo por la calidad de sus
            productos, sino también por su contribución al desarrollo
            profesional de sus clientes y al bienestar de las comunidades donde
            operamos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
