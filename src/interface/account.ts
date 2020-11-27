export interface AccountInterface {
    withDraw: (amount: number) => void;
    deposit: (amount: number) => void;
    checkBalance: () => string;
}