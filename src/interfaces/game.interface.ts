export interface Game {
    image: string;
    name: string;
    description: string;
    price: number;
    machine: 'PS4' | 'SWITCH' | "XBOXONE";
    type: string;
    year: number;
};