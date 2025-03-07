import { jwtDecode } from "jwt-decode";
import { IToken, ITokenExp } from "../types/auth.interface";

export const validateToken = (): ITokenExp | null => {
    const getToken = localStorage.getItem('token');

    if (!getToken) {
        return null;
    }

    const decoded: ITokenExp = jwtDecode<IToken>(getToken) as ITokenExp;

    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        // Si `exp` existe y está en el pasado, el token ha expirado
        console.warn("El token ha expirado.");
        decoded.expired = true;
    }

    return decoded;

}