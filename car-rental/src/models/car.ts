import { Status } from "./status";
import { User } from "./user";

export interface Car {
    id: string;
    type: string;
    manufacturer: string;
    imgUrl: string;
    license: string;
    rentalno: number;
    acqDate: Date;
    rfee: number;
    kmfee: number;
    rentedby: User;
    condition: Status;
}