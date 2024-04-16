import { IReport } from "../interfaces/IReport";

export class ReportMaker {
    constructor(private report: IReport) {}
  
    printDetails() {
      this.report.printDetails();
    }
}
  