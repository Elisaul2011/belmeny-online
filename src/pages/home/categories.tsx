import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Categorías
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Explora nuestras categorías
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Encuentra todo lo que necesitas para tus proyectos.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Herramientas Eléctricas"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                <Link to="/catalog">
                  <span className="absolute inset-0" />
                  Herramientas Eléctricas
                </Link>
              </h3>
              <p className="text-base text-gray-500">
                Taladros, sierras, lijadoras y más para tus proyectos.
              </p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Herramientas Manuales"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                <Link to="/catalog">
                  <span className="absolute inset-0" />
                  Herramientas Manuales
                </Link>
              </h3>
              <p className="text-base text-gray-500">
                Llaves, destornilladores, alicates y más para todo tipo de
                trabajos.
              </p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Equipos"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                <Link to="/catalog">
                  <span className="absolute inset-0" />
                  Equipos
                </Link>
              </h3>
              <p className="text-base text-gray-500">
                Compresores, generadores, soldadores y más para trabajos
                profesionales.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Ver todas las categorías
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
