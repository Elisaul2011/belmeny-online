import { useState } from "react"
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "../../layout/cartContext"
import {CartItem} from '../../types/catalog'
const CartModal = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice, isCartOpen, closeCart } = useCart()

  const [quantityErrors, setQuantityErrors] = useState<Record<number, string | undefined>>({})

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    // Limpiar error previo
    setQuantityErrors((prev) => {
      const updated = { ...prev }
      delete updated[item.id]
      return updated
    })

    // Actualizar cantidad
    const result = updateQuantity(item.id, newQuantity)

    // Si hay error, mostrarlo
    if (!result.success && result.message) {
      setQuantityErrors((prev) => ({
        ...prev,
        [item.id]: result.message,
      }))
    }
  }

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeCart}></div>

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-teal-600" />
              Carrito de Compras
            </h2>
            <button onClick={closeCart} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Su carrito está vacío</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Agregue productos desde nuestro catálogo para comenzar a comprar.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-16 h-16">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        {quantityErrors[item.id] && (
                          <p className="text-xs text-red-500 mt-1">{quantityErrors[item.id]}</p>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => handleQuantityChange(item, Math.max(item.minQuantity, item.quantity - 1))}
                            className="p-1 text-gray-500 hover:text-gray-700"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            min={item.minQuantity}
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item, Number.parseInt(e.target.value) || item.minQuantity)
                            }
                            className="w-12 text-center border-0 focus:ring-0"
                          />
                          <button
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                            className="p-1 text-gray-500 hover:text-gray-700"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${getTotalPrice().toFixed(2)}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={clearCart}
                  className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-teal-700 bg-teal-50 hover:bg-teal-100"
                >
                  Vaciar carrito
                </button>
                <button className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700">
                  Proceder al pago
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartModal

