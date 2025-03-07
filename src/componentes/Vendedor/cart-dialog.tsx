import { X, Minus, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog"
import { Alert, AlertDescription } from "../../components/ui/alert"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

interface CartItem {
  id: string
  code: string
  location: string
  name: string
  image: string
  price: number
  quantity: number
  total: number
}

interface CartDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cartItems: CartItem[]
  subtotal: number
  totalDiscount: number
  onUpdateQuantity: (itemId: string, newQuantity: number) => void
  onRemoveItem: (itemId: string) => void
}

export function CartDialog({
  open,
  onOpenChange,
  cartItems,
  subtotal,
  totalDiscount,
  onUpdateQuantity,
  onRemoveItem,
}: CartDialogProps) {
  const finalTotal = subtotal - totalDiscount

  const handleQuantityChange = (itemId: string, value: string) => {
    const quantity = Number.parseInt(value) || 0
    if (quantity >= 0) {
      onUpdateQuantity(itemId, quantity)
    }
  }

  const handleIncrement = (itemId: string, currentQuantity: number) => {
    onUpdateQuantity(itemId, currentQuantity + 1)
  }

  const handleDecrement = (itemId: string, currentQuantity: number) => {
    if (currentQuantity > 0) {
      onUpdateQuantity(itemId, currentQuantity - 1)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader className="bg-blue-900 text-white p-4 -m-6 mb-6 flex items-center justify-between rounded-t-lg">
          <DialogTitle>Información del presupuesto</DialogTitle>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-white hover:bg-blue-800"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Detalle del presupuesto</h2>

            {cartItems.length === 0 ? (
              <Alert variant="destructive" className="bg-pink-100 border-pink-200 text-pink-900">
                <AlertDescription>No has agregado productos al carrito...</AlertDescription>
              </Alert>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-[100px,1fr] gap-4 border rounded-lg p-4">
                    <div className="relative h-24 w-24">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="grid grid-cols-[1fr,auto] gap-4">
                      <div>
                        <div className="text-red-600 font-semibold mb-1">
                          {item.code} - {item.location}
                        </div>
                        <p className="text-sm text-gray-900 mb-2">{item.name}</p>
                        <div className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          <Button
                            
                            size="icon"
                            className="h-8 w-8 bg-red-500 text-white hover:bg-red-600"
                            onClick={() => handleDecrement(item.id, item.quantity)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="h-8 w-20 text-center"
                          />
                          <Button
                            
                            size="icon"
                            className="h-8 w-8 bg-green-500 text-white hover:bg-green-600"
                            onClick={() => handleIncrement(item.id, item.quantity)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="destructive" size="sm" onClick={() => onRemoveItem(item.id)}>
                          Eliminar
                        </Button>
                        <div className="text-sm font-semibold">Total: ${item.total.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Procesar Presupuesto</Button>

            <div className="text-right space-y-1">
              <p className="text-sm text-gray-600">Total de productos: {cartItems.length}</p>
              <p className="text-sm text-gray-600">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Total descuento: ${totalDiscount.toFixed(2)}</p>
              <p className="font-semibold text-blue-900">Total Final: ${finalTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

