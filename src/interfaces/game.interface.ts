export interface Game {
    image: File | null;
    name: string;
    description: string;
    price: number;
    console: 'PS4' | 'SWITCH' | "XBOXONE";
    type: string;
    year: number;
};