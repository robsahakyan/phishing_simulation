export const disableGlobalLoadingOption = {
    getPendingMeta: (() => ({ shouldNotLoad: true }))
};

export interface AuthTokenDto {
    authToken: string;
}