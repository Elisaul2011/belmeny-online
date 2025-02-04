export interface Slide {
  title: string;
  image: string;
  subtitle: string;
  description: string;
}

// useEffect(() => {
//   const getTokenDecode = validateToken();
//   if (!getTokenDecode || getTokenDecode.expired) {
//       navigate('/login')
//   }

//   if (getTokenDecode !== null) {
//       setUserLogin(getTokenDecode as IToken);
//   }
// }, [])

// export interface IToken {
//   id: number;
//   firstName: number;
//   lastName: string;
//   email: string;
//   role: string;
//   specialty: string;
//   company: Company;
//   createdAt: Date;
//   updatedAt: Date;
//   iat: number;
//   exp: number;
// }

// export interface ITokenExp extends IToken {
//   expired: boolean;
// }

// export const validateToken = (): ITokenExp | null => {
//   const getToken = localStorage.getItem('token');

//   if (!getToken) {
//       return null;
//   }

//   const decoded: ITokenExp = jwtDecode<IToken>(getToken) as ITokenExp;

//   if (decoded.exp && decoded.exp * 1000 < Date.now()) {
//       // Si `exp` existe y está en el pasado, el token ha expirado
//       console.warn("El token ha expirado.");
//       decoded.expired = true;
//   }

//   return decoded;

// }
