import { Distributor } from '../types/distributors'

const distributors: Distributor[] = [
    {
        id: 1,
        name: "Ingco Sambil Maracaibo",
        address:
            "Avenida Guajira, Zona Industrial Norte, Maracaibo 4001, Zulia",
            phone: "04126995648",
        image: [
            "/src/assets/img/Sambil_Maracaibo.png",
            "/src/assets/img/Constru-Ferre.png",
        ],
        location: {
            lat: 10.7230,
            lng: -71.6322,
        },
    },
    {
        id: 2,
        name: "Alkosto Chinita",
        address:
            "C.C. Ciudad Chinita, 1er Piso, Local 102, Maracaibo, Venezuela",
            phone: "04246168081",
        image: [
            "",
        ],
        location: {
            lat: 10.6446,
            lng: -71.6182,
        },
    },
    {
        id: 3,
        name: "Constru-Ferre Margarita",
        address: "Av. Terranova con Llano Adentro, Isla de Margarita",
        phone: "04122470600",
        image: [
            "/src/assets/img/Constru-Ferre.png",
        ],
        location: {
            lat: 10.9692,
            lng: -63.8513,
        },
    },
];

export default distributors