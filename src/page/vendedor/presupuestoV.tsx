/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Search, ChevronDown, ShoppingCart } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { CartDialog } from "../../componentes/Vendedor/cart-dialog";
import { Switch } from "../../components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "../../components/ui/dropdown-menu";
import { products, User, Product } from "./presupuesto.data";
// import { Header } from "../../componentes/Dashboard/headerPersonal"

type Direction = "next" | "prev";

function App() {
  const [searchType] = useState<"name" | "code">("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [productsState, setProductsState] = useState(products);
  const [isLubricant, setIsLubricant] = useState(false);
  const user: User = {
    agency: "MARACAIBO",
    permissions: ["lubricant_access"],
  };

  const ITEMS_PER_PAGE = 7;
  const TOTAL_PAGES = Math.ceil(products.length / ITEMS_PER_PAGE);

  // const filteredProducts = products.filter((product) => {
  //   if (searchQuery.trim() === "") return true;

  //   if (searchType === "name") {
  //     return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   } else {
  //     return product.code.toLowerCase().includes(searchQuery.toLowerCase());
  //   }
  // });

  // Update how we get current products
  // const currentProducts = filteredProducts.slice(
  //   (currentPage - 1) * ITEMS_PER_PAGE,
  //   currentPage * ITEMS_PER_PAGE
  // );

  // Add effect to reset page when search changes
  useEffect(() => {
    // setCurrentPage(1);
  }, [searchQuery]);

  // Add console logs for debugging
  // console.log({
  //   totalProducts: filteredProducts.length,
  //   currentPage,
  //   itemsPerPage: ITEMS_PER_PAGE,
  //   totalPages: TOTAL_PAGES,
  //   currentProductsLength: currentProducts.length,
  // });

  const handleQuantityChange = (productId: string, value: string) => {
    const quantity = Number.parseInt(value) || 0;
    if (quantity >= 0) {
      setQuantities((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  const handleIncrement = (productId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      const newItem = {
        ...product,
        quantity,
        total: product.price * quantity,
      };
      setCartItems((prev) => [...prev, newItem]);
      setSubtotal((prev) => prev + newItem.total);
      setQuantities((prev) => ({
        ...prev,
        [product.id]: 0,
      }));
    }
  };

  const handleLubricantChange = (checked: boolean) => {
    setIsLubricant(checked);
    if (checked) {
      setCartItems([]);
      setSubtotal(0);
      setTotalDiscount(0);
      window.location.reload(); // Refresh the page when lubricant is enabled
    }
  };

  const showLubricantOption =
    user.agency !== "CARACAS" && user.permissions.includes("lubricant_access");

  const handleUpdateCartQuantity = (itemId: string, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === itemId) {
          const newTotal = item.price * newQuantity;
          return {
            ...item,
            quantity: newQuantity,
            total: newTotal,
          };
        }
        return item;
      })
    );

    // Recalculate subtotal
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.total, 0);
    setSubtotal(newSubtotal);
  };

  const handleRemoveFromCart = (itemId: string) => {
    const itemToRemove = cartItems.find((item) => item.id === itemId);
    if (itemToRemove) {
      setSubtotal((prev) => prev - itemToRemove.total);
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    }
  };

  const handlePagination = (direction: Direction) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    }
    if (direction === "prev") {
      setCurrentPage((prev) => prev - 1);
    }

    console.log(currentPage);

    const productsPerpage = products.slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    setProductsState(productsPerpage);

    // console.log(ITEMS_PER_PAGE);
    // console.log(products);
    // console.log(
    //   products.slice(
    //     currentPage * ITEMS_PER_PAGE,
    //     currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    //   )
    // );
  };

  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="container py-6">{/* <Header/> */}</div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Client Selection */}
          <div className="space-y-4 mb-8">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="client" className="min-w-[80px]">
                  Cliente:
                </Label>
                <Input
                  id="client"
                  placeholder="Selecciona un cliente..."
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="max-w-2xl"
                />
              </div>

              {selectedClient && (
                <div className="ml-[80px] space-y-3">
                  <p className="text-sm text-blue-900">
                    Cliente seleccionado: J501782822 - AARON CARS 18 C.A. (AARON
                    CARS 18 C.A.)
                  </p>
                  <div className="flex items-center gap-2">
                    <Label className="min-w-[100px]">Forma de Pago:</Label>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit" id="credit" />
                        <Label htmlFor="credit">CREDITO</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="debit" id="debit" />
                        <Label htmlFor="debit">DEBITO</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="min-w-[100px]">Lista de Precios:</Label>
                    <span className="text-sm">2</span>
                  </div>
                  {showLubricantOption && (
                    <div className="flex items-center gap-2">
                      <Label className="min-w-[100px]">Lubricante:</Label>
                      <Switch
                        checked={isLubricant}
                        onCheckedChange={handleLubricantChange}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Top 100 Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    Top 100 Productos
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>VERT</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Todos los productos</DropdownMenuItem>
                        <DropdownMenuItem>Comprados</DropdownMenuItem>
                        <DropdownMenuItem>No Comprados</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>INGCO</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Todos los productos</DropdownMenuItem>
                        <DropdownMenuItem>Comprados</DropdownMenuItem>
                        <DropdownMenuItem>No Comprados</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* General Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    General
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>Todos los productos</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>VERT</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Ventas Diarias</DropdownMenuItem>
                        <DropdownMenuItem>Ventas Mensuales</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>INGCO</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Perfil</DropdownMenuItem>
                        <DropdownMenuItem>Preferencias</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>FLEXIMATIC</DropdownMenuItem>
                  <DropdownMenuItem>IMOU</DropdownMenuItem>
                  <DropdownMenuItem>QUILOSA</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sold Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Productos Vendidos
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>Últimos 30 días</DropdownMenuItem>
                  <DropdownMenuItem>Este mes</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder={`Buscar por ${searchType === "name" ? "nombre" : "código"}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {productsState.length > 0 &&
                productsState.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md p-4 border flex flex-col"
                  >
                    <div className="relative h-40 mb-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-red-600 font-semibold mb-2">
                        {product.code} - {product.location}
                      </div>
                      <p className="text-sm text-gray-900 mb-2">
                        {product.name}
                      </p>
                      <div className="text-sm mb-2">
                        Existencia:{" "}
                        <span className="font-semibold">
                          {product.stock} PZA
                        </span>
                      </div>
                      <div className="text-lg font-bold text-green-600 mb-4">
                        ${product.price.toFixed(2)}
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Button
                          size="icon"
                          className="h-8 w-8 bg-red-500 text-white hover:bg-red-600"
                          onClick={() => handleDecrement(product.id)}
                        >
                          -
                        </Button>
                        <Input
                          type="number"
                          value={quantities[product.id] || ""}
                          onChange={(e) =>
                            handleQuantityChange(product.id, e.target.value)
                          }
                          className="h-8 w-20 text-center"
                        />
                        <Button
                          size="icon"
                          className="h-8 w-8 bg-green-500 text-white hover:bg-green-600"
                          onClick={() => handleIncrement(product.id)}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => handleAddToCart(product)}
                        disabled={!quantities[product.id]}
                      >
                        Agregar
                      </Button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <Button
                onClick={() => handlePagination("prev")}
                disabled={currentPage === 0}
              >
                Anterior
              </Button>
              {TOTAL_PAGES > 0 &&
                Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      //variant={currentPage === page }
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                )}
              <Button
                onClick={() => handlePagination("next")}
                disabled={currentPage === TOTAL_PAGES - 1 || TOTAL_PAGES === 0}
              >
                Siguiente
              </Button>
            </div>

            {/* Cart Summary */}
            <div className="mt-8 flex justify-end items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  Total de productos: {cartItems.length}
                </p>
                <p className="text-lg font-bold text-blue-900">
                  Subtotal: ${subtotal.toFixed(2)}
                </p>
              </div>
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ver Carrito
              </Button>
            </div>

            <CartDialog
              open={cartOpen}
              onOpenChange={setCartOpen}
              cartItems={cartItems}
              subtotal={subtotal}
              totalDiscount={totalDiscount}
              onUpdateQuantity={handleUpdateCartQuantity}
              onRemoveItem={handleRemoveFromCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
