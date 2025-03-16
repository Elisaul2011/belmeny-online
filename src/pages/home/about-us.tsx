import {
  ShieldCheck,
  TrendingUp,
  Truck,
  PenToolIcon as Tool,
} from "lucide-react";

export default function aboutUs() {
  return (
    <div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Características
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              ¿Por qué elegir Belmeny Group?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Ofrecemos productos de alta calidad, servicio excepcional y
              precios competitivos.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <Tool className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Calidad superior
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nuestras herramientas están fabricadas con los mejores
                    materiales y pasan por rigurosos controles de calidad.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Garantía extendida
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Todos nuestros productos cuentan con garantía extendida y
                    servicio técnico especializado.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Innovación constante
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Nos mantenemos a la vanguardia de la tecnología para
                    ofrecerte las herramientas más avanzadas.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <Truck className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Envío rápido
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Entregamos tus pedidos de forma rápida y segura a cualquier
                    parte del país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
