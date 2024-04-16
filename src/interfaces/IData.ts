import { City } from "./ICity";

export interface IData {
    cities: {
        [key: string]: City;
    };
}