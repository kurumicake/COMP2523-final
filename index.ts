import { Map } from "./src/classes/Map";
import { ReportMaker } from "./src/classes/ReportMaker";
import { ComplexReport } from "./src/classes/ComplexReport";

async function main() {

  const map = new Map();
  //! fixed the issue, was just missing an await...
  await map.loadData("data.json")
  map.printMap();
  console.log("---End of Map---");
  map.registerForShots(19);
  const report = new ReportMaker(new ComplexReport(map));
  report.printDetails();
  console.log("---End of Report---");
  map.printMap();
  console.log("---End of Map---");
}

main();

