import {Map} from "./src/classes/Map"
import {ReportMaker} from "./src/classes/ReportMaker";
import { ComplexReport } from "./src/classes/ComplexReport";
import { IData } from "./src/interfaces/IData";
import { DataManager } from "./src/classes/DataManager";
async function main() {
  const manager = new DataManager();
  manager.loadData("data.json")
    const map = new Map();
    map.printMap();
    console.log("---End of Map---")
    map.registerForShots(19);
    const report = new ReportMaker(new ComplexReport(map));
    report.printDetails();
    console.log("---End of Report---")
    map.printMap();
    console.log("---End of Map---")
  }
  
  main();