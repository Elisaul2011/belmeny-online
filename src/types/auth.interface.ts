
export interface ITokenExp extends IToken {
    expired: boolean;
}

export interface IToken {
    iss: string;
    iat: number;
    exp: number;
    nbf: number;
    jti: string;
    sub: string;
    prv: string;
}
