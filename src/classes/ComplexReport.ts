import { Map } from "../classes/Map";
import { IReport } from "../interfaces/IReport";
import { Clinic } from "../classes/Clinic"; 
import { Inhabitant } from "../interfaces/IInhabitant";

export class ComplexReport implements IReport {
  constructor(private map: Map) {}

  printDetails() {
    const cities = this.map.loadData("data.json");
    console.log("this is my data in printDetails ComplexReport:", JSON.stringify(cities));

    for (const city in cities) {
      console.log(`City: ${city}`);
      //@ts-ignore
      const clinics = cities[city].clinics as Clinic[];

      clinics.forEach((clinic) => {
        const queueLength = clinic.size();
        const averageWaitTime = clinic.getCurrentWaitTime();

        console.log(`${clinic.name} - People In Lineup: ${queueLength}`);
        console.log(
          `The Average wait time for ${clinic.name} is ${averageWaitTime}`
        );

        // ! Use getQueue method
        clinic.getQueue().forEach((person: Inhabitant) => {
          console.log(`Next up: ${person.fullName})`);
        });
      });
    }
  }
}
