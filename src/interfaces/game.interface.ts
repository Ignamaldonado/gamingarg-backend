export interface Game {
    image: string;
    name: string;
    description: string;
    price: number;
    console: 'PS4' | 'SWITCH' | "XBOXONE";
    type: string;
    year: number;
}