import { Household } from "./IHousehold";
import { Clinic } from "../classes/Clinic";

export interface City {
    households: Household[];
    clinics: Clinic[];
}