import { Map } from "../classes/Map";
import { IReport } from "../interfaces/IReport";
import { Clinic } from "../classes/Clinic";
import { Inhabitant } from "../interfaces/IInhabitant";

export class ComplexReport implements IReport {
  constructor(private map: Map) {}

  async printDetails() {
    await this.map.loadData("data.json");
    const cities = this.map.getData();
    const citiesString = JSON.stringify(cities);

    // console.log(
    //   "this is my data in printDetails ComplexReport:",
    //   JSON.stringify(cities)
    // );

    if (!cities || !cities.city) {
      console.log("Cities data is not properly loaded or structured.");
      return;
    }

    for (const cityName in cities.city) {
      console.log(`---City: ${cityName}---`);
      const cityData = cities.city[cityName];

      // console.log(cityData.clinics);

      if (cityData.clinics) {
        for (const clinic of cityData.clinics) {
          Object.setPrototypeOf(clinic, Clinic.prototype);
          
        };
      }

      if (!cityData.clinics) {
        console.log(`No clinics found in ${cityName}`);
        continue; //continue to skip
      }

      for (const clinic of cityData.clinics) {
        const queueLength = clinic.size();
        const averageWaitTime = clinic.getCurrentWaitTime();

        console.log(`${clinic.name} - People In Lineup: ${queueLength}`);
        console.log(
          `The Average wait time for ${clinic.name} is ${averageWaitTime}`
        );
     

        // clinic.getQueue()((person: Inhabitant) => {
        //   console.log(`Next up: ${person.fullName}`);
        // });
      };
    }
  }

  //     //@ts-ignore
  //     for (const city in cities) {
  //       console.log(`City: ${city}`);
  //       //@ts-ignore
  //       const clinics = cities[city].clinics as Clinic[];
  //       console.log(JSON.stringify(clinics))
  // //!this part is not working as planned
  //       clinics.forEach((clinic) => {
  //         const queueLength = clinic.size();
  //         const averageWaitTime = clinic.getCurrentWaitTime();

  //         console.log(`${clinic.name} - People In Lineup: ${queueLength}`);
  //         console.log(
  //           `The Average wait time for ${clinic.name} is ${averageWaitTime}`
  //         );

  //         // ! Use getQueue method
  //         clinic.getQueue().forEach((person: Inhabitant) => {
  //           console.log(`Next up: ${person.fullName})`);
  //         });
  //       });
  //     }
}
