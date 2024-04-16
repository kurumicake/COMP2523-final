import fs from "node:fs/promises";
import { Inhabitant } from "../interfaces/IInhabitant";
import { IClinic } from "../interfaces/IClinic";

export class Map {
  private _mapData: any;

  constructor() {}

 
  // async loadData(fileName: string): Promise<void> {
  //   const data = await fs.readFile(fileName, 'utf8');
  //   this._mapData = JSON.parse(data.toString());
  // }

  printMap() {
    //! not sure why data is not loading properly.
    if (!this._mapData) {
      console.log("Data is not loaded yet.");
      return;
    }

    const mapRows: string[] = [];
    for (const city in this._mapData.city) {
      const cityData = this._mapData.city[city];
      const row = new Array(6).fill('x'); 
      for (const household of cityData.households) {
        const index = household.blockNum;
        const allVaccinated = household.inhabitants.every((p: Inhabitant) => p.isVaccinated);
        row[index] = allVaccinated ? 'F' : 'H';
      }
      for (const clinic of cityData.clinics) {
        const index = clinic.blockNum;
        row[index] = 'C';
      }
      mapRows.push(row.join(','));
    }
    console.log(mapRows.join('\n'));
  }

  // Registers eligible individuals for vaccination
  registerForShots(currentIntake: number) {
    if (!this._mapData) {
      console.log("Data is not loaded yet.");
      return;
    }

    for (const city in this._mapData.city) {
      const cityData = this._mapData.city[city];
      for (const household of cityData.households) {
        for (const person of household.inhabitants) {
          if (!person.isVaccinated && person.age >= currentIntake) {
            const nearestClinic = this.findNearestClinic(household.blockNum, cityData.clinics);
            this.enqueueForVaccination(person, nearestClinic);
            person.isVaccinated = true;
          }
        }
      }
    }
  }

  // Find the nearest clinic based on block number
  private findNearestClinic(blockNum: number, clinics: IClinic[]): IClinic {
    return clinics.reduce((prev, curr) => {
      return Math.abs(curr.blockNum - blockNum) < Math.abs(prev.blockNum - blockNum) ? curr : prev;
    });
  }

  // Enqueue a person for vaccination in the nearest clinic
  private enqueueForVaccination(person: Inhabitant, clinic: IClinic) {
    clinic.queue = clinic.queue || [];
    clinic.queue.push(person);
  }
}
