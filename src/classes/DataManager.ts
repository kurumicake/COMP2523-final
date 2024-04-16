import fs from "node:fs/promises";
import {IData} from "../interfaces/IData"

export class DataManager {
    public data: IData[] = [];
  
    async loadData(filename: string): Promise<void> {
      const rawData = await fs.readFile(filename);
      this.data = JSON.parse(rawData.toString()) as IData[];
    }
  }