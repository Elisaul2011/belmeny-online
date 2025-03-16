import { Distributor } from '../types/distributors'

const distributors: Distributor[] = [
    {
        id: 1,
        name: "Tienda Belmeny Perija",
        address:
            "Calle Central – Diagonal a la Alcaldía / Centro comercial Ferremarca, local # 1 B – Planta Baja.",
        image: "/placeholder.svg?height=300&width=500",
        location: {
            lat: 10.1234,
            lng: -67.5678,
        },
    },
    {
        id: 2,
        name: "Tienda Belmeny Villa Rosa",
        address:
            "Calle principal de Villa Rosa, diagonal a Corpoelec, al lado de Bodega Los Juanes. Municipio García, Nueva Esparta",
        image: "/placeholder.svg?height=300&width=500",
        location: {
            lat: 10.9876,
            lng: -67.1234,
        },
    },
    {
        id: 3,
        name: "Tienda Belmeny Barquisimeto – Av. Vargas",
        address: "Av. Vargas entre 24 y 25",
        phone: "04120321079",
        image: "/placeholder.svg?height=300&width=500",
        location: {
            lat: 10.0678,
            lng: -67.9876,
        },
    },
];

export default distributors