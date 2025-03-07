import { useState } from "react";
import { CircleUser, Lock, Loader2, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { ScreenLoader } from "../../componentes/ScreenLoader";
import { postDataApi } from "../../backend/BackendBasic";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

interface ILogin {
  email: string;
  password: string;
}
const validations = z.object({
  email: z.string().email({ message: "Este campo debe ser un email" }),
  password: z
    .string()
    .refine((text) => text !== "", { message: "Este campo es obligatorio" }),
});

export default function LoginForm() {
  const [isCliente, setisCliente] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validations),
  });

  const onSubmit = async (data: ILogin) => {
    setLoading(true);
    await postDataApi("/login", data).then((response) => {
      console.log(response);

      if (response.token) {
        localStorage.setItem("token", response.token);
        // localStorage.removeItem('token')
        navigate("/Dashboard-vendedor");
      }

      if (response.error) {
        toast(
          () => (
            <span className="text-red-500 bg-transparent">
              {" "}
              Ha ocurrido un error{" "}
            </span>
          ),
          {
            position: "bottom-center",
          }
        );
      }
    });

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-orange-500">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2) 25%, transparent 25%, transparent 50%, rgba(59, 130, 246, 0.2) 50%, rgba(59, 130, 246, 0.2) 75%, transparent 75%, transparent)",
            backgroundSize: "100px 100px",
            animation: "slide 30s linear infinite",
          }}
        />
        {/* Burbujas flotantes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background:
                i % 2 === 0
                  ? "rgba(59, 130, 246, 0.3)"
                  : "rgba(249, 115, 22, 0.3)",
              filter: "blur(60px)",
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {loading && <ScreenLoader></ScreenLoader>}

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Selector de tipo */}
          <div className="p-2 bg-white/5">
            <div className="grid grid-cols-2 gap-2 p-1 bg-white/10 rounded-xl">
              <button
                className={`py-3 px-6 rounded-xl font-medium transition-all duration-500 relative overflow-hidden ${
                  isCliente
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setisCliente(true)}
              >
                Cliente
                {isCliente && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                )}
              </button>
              <button
                className={`py-3 px-6 rounded-xl font-medium transition-all duration-500 relative overflow-hidden ${
                  !isCliente
                    ? "text-white bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setisCliente(false)}
              >
                Empresa
                {!isCliente && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                )}
              </button>
            </div>
          </div>

          {/* Contenedor de formularios con efecto 3D */}
          <div className="relative perspective" style={{ minHeight: "400px" }}>
            {/* Formulario Personal */}
            <div
              className={`transition-all duration-700 absolute w-full backface-visibility-hidden transform-style-3d`}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Bienvenido
                  <div
                    className={`h-1 w-20 bg-gradient-to-r ${!isCliente ? "from-orange-500 to-orange-300" : "from-blue-500 to-blue-300"}  mx-auto mt-2 rounded-full`}
                  />
                </h2>

                <div className="space-y-6">
                  <div className="group">
                    <div className="relative">
                      <input
                        type="text"
                        {...register("email")}
                        placeholder="Usuario"
                        className="w-full px-5 py-4 bg-white/10 rounded-xl text-white placeholder:text-white/50 focus:bg-white/20 border border-white/10 focus:border-white/30 outline-none transition-all duration-300"
                      />
                      <CircleUser className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white transition-colors duration-300" />
                    </div>
                    {errors.email && (
                      <span className="text-red-500 font-medium ml-4">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="group">
                    <div className="relative">
                      <input
                        type="password"
                        {...register("password")}
                        placeholder="Contraseña"
                        className="w-full px-5 py-4 bg-white/10 rounded-xl text-white placeholder:text-white/50 focus:bg-white/20 border border-white/10 focus:border-white/30 outline-none transition-all duration-300"
                      />
                      <Lock className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white transition-colors duration-300" />
                    </div>
                    {errors.password && (
                      <span className="text-red-500 font-medium ml-4">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`disabled:bg-gray-800 relative w-full bg-gradient-to-r  text-white py-4 px-6 rounded-xl font-medium shadow-lg  transition-all duration-300 group overflow-hidden  ${!isCliente ? "from-orange-500 to-orange-400 shadow-orange-500/30 hover:shadow-orange-500/50" : "from-blue-600 to-blue-500 shadow-blue-500/30 hover:shadow-blue-500/50"} `}
                  >
                    <span
                      className={`transition-all duration-300 inline-flex items-center ${loading ? "opacity-0" : "opacity-100"}`}
                    >
                      Iniciar sesión
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="animate-spin h-6 w-6" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-45deg] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
