import { IReport } from "../interfaces/IReport";
import { Map } from "./Map";
import { Inhabitant } from "../interfaces/IInhabitant";
import { DataManager } from "./DataManager";

export class SimpleReport implements IReport{
    constructor(private map: Map) {}
    printDetails(){
        const cities = this.map.loadData("data.json");
        console.log("this is my data in printDetails SimpleReport:", cities);
    
        for (const city in cities) {
          console.log(`City: ${city}`);
          //@ts-ignore
          const clinics = cities[city].clinics as Clinic[];
    
          clinics.forEach((clinic) => {
            const queueLength = clinic.size();
    
            console.log(`${clinic.name} - People In Lineup: ${queueLength}`);
          });
        }
    }
}