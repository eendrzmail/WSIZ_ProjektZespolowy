export interface IAuthReducer {
    user: {
        sub: string,
        id: number,
        roles: string[],
        isSuspended: boolean;
        isBanned: boolean;
    } | null;
    jwt: string | null;
}