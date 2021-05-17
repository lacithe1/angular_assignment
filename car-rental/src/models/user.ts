import { Car } from "./car";

export interface User {
    id: number;
    name: string;
    idno: string;
    phoneno: string;
    cars: Car[];
}