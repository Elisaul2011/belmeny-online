export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    minQuantity: number
}

export interface CartItem {
    id: number
    name: string
    price: number
    image: string
    quantity: number
    minQuantity: number // Cantidad mínima permitida
}

export interface CartContextType {
    cartItems: CartItem[]
    addToCart: (product: CartItem) => void
    updateQuantity: (id: number, quantity: number) => { success: boolean; message?: string }
    removeFromCart: (id: number) => void
    clearCart: () => void
    getTotalItems: () => number
    getTotalPrice: () => number
    isCartOpen: boolean
    openCart: () => void
    closeCart: () => void
}