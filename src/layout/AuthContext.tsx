"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

// Definir los tipos de usuario
export type UserRole = "cliente" | "vendedor" | "supervisor" | "gerente" | null

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock de usuarios para simular la autenticación
const MOCK_USERS = [
  {
    id: "1",
    name: "Cliente Demo",
    email: "cliente@example.com",
    password: "password123",
    role: "cliente" as UserRole,
  },
  {
    id: "2",
    name: "Vendedor Demo",
    email: "vendedor@total-tools.com",
    password: "password123",
    role: "vendedor" as UserRole,
  },
  {
    id: "3",
    name: "Supervisor Demo",
    email: "supervisor@total-tools.com",
    password: "password123",
    role: "supervisor" as UserRole,
  },
  {
    id: "4",
    name: "Gerente Demo",
    email: "gerente@total-tools.com",
    password: "password123",
    role: "gerente" as UserRole,
  },
]

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  // Verificar si hay un usuario en localStorage al cargar la página
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Simular una llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Buscar el usuario en nuestro mock
    const foundUser = MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (foundUser) {
      // Crear objeto de usuario sin la contraseña
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)

      // Guardar en localStorage
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      // Redireccionar según el rol
      switch (foundUser.role) {
        case "cliente":
          navigate("/")
          break
        case "vendedor":
          navigate("/dashboard-vendedor")
          break
        case "supervisor":
          navigate("/dashboard-supervisor")
          break
        case "gerente":
          navigate("/dashboard-gerente")
          break
      }

      return { success: true, message: "Inicio de sesión exitoso" }
    }

    return { success: false, message: "Credenciales incorrectas" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}

