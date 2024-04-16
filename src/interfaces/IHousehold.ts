import { Inhabitant as IInhabitant } from "./IInhabitant";

export interface Household {
    blockNum: number;
    inhabitants: IInhabitant[];
  }