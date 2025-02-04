import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authUser";

interface Roles {
  [username: string]: string;
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Estado para la contraseña (se mantiene)
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setUserRole } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem("token");
  // }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username) {
      setErrorMessage("Por favor, ingrese un nombre de usuario.");
      return;
    }

    const roles: Roles = {
      admin: "admin",
      vendedor: "Vendedor",
      supervisor: "Supervisor",
      gerente: "Gerente",
    };

    const userRole = roles[username];

    if (userRole) {
      const userData = {
        username,
        password,
      };

      localStorage.setItem("usuario", JSON.stringify(userData));

      setUserRole(userRole);
      navigate("/Dashboard-vendedor");
      console.log("Login exitoso!");
    } else {
      setErrorMessage("Usuario no válido.");
      localStorage.removeItem("usuario");
    }
  };

  return (
    <div className="h-[100vh] flex flex-col items-center bg-background bg-cover justify-center text-white">
      <div className="h-[300px] w-90 bg-blue-600/20 border border-blue-600/20 backdrop-blur-lg rounded-lg px-6 my-4 flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold pb-6 text-center">
          Inicio de Sesión
        </h2>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-full relative">
            <FaUser className="absolute top-[35%] right-3" />
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-200 rounded-full py-2 px-4 my-2 bg-transparent text-white"
            />
          </div>
          <div className="w-full relative">
            {" "}
            {/* Input de contraseña de vuelta */}
            <FaLock className="absolute top-[35%] right-3" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-200 rounded-full py-2 px-4 my-2 bg-transparent text-white"
            />
          </div>
          <button
            type="submit"
            className="my-2 py-2 w-full rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:scale-105 active:scale-105 active:scale-x-105 transition duration-150 ease-in-out"
          >
            Entrar
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-center mb-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
