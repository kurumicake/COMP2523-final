import { Inhabitant } from "./IInhabitant";

export interface IClinic {
    name: string;
    blockNum: number;
    staff: number;
    queue: Inhabitant[];
  }