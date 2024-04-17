import { IReport } from "../interfaces/IReport";
import { Map } from "./Map";
import { Inhabitant } from "../interfaces/IInhabitant";

export class SimpleReport implements IReport{
    constructor(private map: Map) {}
    async printDetails(){
        await this.map.loadData("data.json");
        const cities = this.map.getData()
        console.log("this is my data in printDetails SimpleReport:", cities);
    // @ts-ignore
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