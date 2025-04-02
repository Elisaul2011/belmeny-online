import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    nombreUsuario: "",
    email: "",
    password: "",
    confirmPassword: "",
    compania: "",
    website: "",
    telefono: "",
    ciudad: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    const requiredFields = [
      "nombre",
      "apellido",
      "nombreUsuario",
      "email",
      "password",
      "confirmPassword",
      "compania",
      "telefono",
      "ciudad",
    ]

    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = "Este campo es requerido"
      }
    })

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido"
    }

    if (formData.password && formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    try {
      // Here you would typically make an API call to register the user
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Registration submitted:", formData)
      alert("Solicitud de registro enviada. Recibirá un correo con instrucciones adicionales.")
      // Redirect to login page or show success message
    } catch (error) {
      console.error("Registration error:", error)
      alert("Error al registrarse. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-3xl mb-6">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Registro</h2>
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Después de registrarse, su solicitud será enviada al administrador del sitio para su aprobación.</p>
              <p className="mt-1">A continuación, recibirá un correo electrónico con instrucciones adicionales.</p>
            </div>
          </div>

          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.nombre ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>}
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">
                  Apellido <span className="text-red-500">*</span>
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.apellido ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.apellido && <p className="mt-1 text-sm text-red-600">{errors.apellido}</p>}
              </div>

              <div>
                <label htmlFor="nombreUsuario" className="block text-sm font-medium text-gray-700">
                  Nombre de Usuario <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombreUsuario"
                  name="nombreUsuario"
                  type="text"
                  required
                  value={formData.nombreUsuario}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.nombreUsuario ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.nombreUsuario && <p className="mt-1 text-sm text-red-600">{errors.nombreUsuario}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className={`block w-full pr-10 rounded-md border ${
                      errors.password ? "border-red-300" : "border-gray-300"
                    } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirmación de Contraseña <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pr-10 rounded-md border ${
                      errors.confirmPassword ? "border-red-300" : "border-gray-300"
                    } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              <div>
                <label htmlFor="compania" className="block text-sm font-medium text-gray-700">
                  Compañía <span className="text-red-500">*</span>
                </label>
                <input
                  id="compania"
                  name="compania"
                  type="text"
                  required
                  value={formData.compania}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.compania ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.compania && <p className="mt-1 text-sm text-red-600">{errors.compania}</p>}
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.telefono ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>}
              </div>

              <div>
                <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">
                  Ciudad <span className="text-red-500">*</span>
                </label>
                <input
                  id="ciudad"
                  name="ciudad"
                  type="text"
                  required
                  value={formData.ciudad}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.ciudad ? "border-red-300" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.ciudad && <p className="mt-1 text-sm text-red-600">{errors.ciudad}</p>}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-auto inline-flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

