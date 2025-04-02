import type { MenuItem } from "../types/menu"

const menuData: MenuItem[] = [
    {
        id: 1,
        title: "Quienes somos",
        newTab: false,
        submenu: [
            {
                id: 11,
                title: "Acerca de nosotros",
                path: "/about-us",
                newTab: false,
            },
            {
                id: 12,
                title: "Trabaja con nosotros",
                path: "/postulate",
                newTab: false,
            },
        ],
    },
    {
        id: 2,
        title: "Tienda",
        newTab: false,
        submenu: [
            {
                id: 21,
                title: "Catálogo",
                path: "/catalog",
                newTab: false,
            },
            {
                id: 22,
                title: "MercadoLibre",
                newTab: false,
                path: "https://www.mercadolibre.com",
            },
        ],
    },
    {
        id: 3,
        title: "Distribuidores",
        path: "/distributors",
        newTab: false,
    },
    {
        id: 4,
        title: "Ofertas",
        path: "/offers",
        newTab: false,
    },
    {
        id: 5,
        title: "Contacto",
        path: "/contact",
        newTab: false,
    },
]

export default menuData

