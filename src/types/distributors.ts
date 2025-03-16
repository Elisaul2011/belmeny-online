export interface Distributor {
    id: number;
    name: string;
    address: string;
    image: string;
    phone?: string;
    location: {
        lat: number;
        lng: number;
    };
}
