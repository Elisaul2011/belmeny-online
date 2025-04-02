import {Offers, SlidesO} from '../types/offers'

export const offers:Offers[] = [
    {
        id: 1,
        name: "Taladro Percutor 20V",
        description: "Taladro percutor inalámbrico con batería de litio de 20V y 2 velocidades",
        oldPrice: 199.99,
        newPrice: 149.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 2,
        name: "Sierra Circular 1500W",
        description: 'Sierra circular con potencia de 1500W y disco de 7-1/4"',
        oldPrice: 249.99,
        newPrice: 189.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 3,
        name: "Juego de Llaves 40 piezas",
        description: "Juego de llaves combinadas en milímetros y pulgadas, 40 piezas",
        oldPrice: 89.99,
        newPrice: 69.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 4,
        name: "Amoladora Angular 850W",
        description: 'Amoladora angular de 4-1/2" con potencia de 850W',
        oldPrice: 129.99,
        newPrice: 99.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 5,
        name: "Compresor de Aire 50L",
        description: "Compresor de aire con tanque de 50L y 2HP de potencia",
        oldPrice: 349.99,
        newPrice: 279.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: 6,
        name: "Set de Destornilladores 12 piezas",
        description: "Set de destornilladores de precisión con 12 piezas diferentes",
        oldPrice: 39.99,
        newPrice: 29.99,
        image: "/placeholder.svg?height=300&width=300",
      },
]

export const slides: SlidesO[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Ofertas Especiales",
    subtitle: "Hasta 30% de descuento en herramientas eléctricas",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Nuevos Productos",
    subtitle: "Descubre nuestra nueva línea de herramientas profesionales",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Promoción Limitada",
    subtitle: "Compra ahora y recibe accesorios gratis",
  },
]
