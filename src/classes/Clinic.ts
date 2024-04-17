import {Inhabitant} from "../interfaces/IInhabitant";

export class Clinic {
    private queue: Inhabitant[];

    constructor(
        public name: string,
        public numberOfStaff: number,
        public blockNum: number
    ) {
        this.queue = [];
    }

    // ! Getting the queue from outside of the Clinic class
    public getQueue(): Inhabitant[] {
        if (!Array.isArray(this.queue)) {
            console.error("Queue was uninitialized.");
            this.queue = [];
        }
        return this.queue.slice(); 
      }

      public setQueue(queue: Inhabitant[]): void {
        if (Array.isArray(queue)) {
            this.queue = queue;
        } else {
            console.error("Invalid queue");
            this.queue = [];
        }
    }

    // Adds a person to the queue
    enqueue(person: Inhabitant): void {
        this.queue.push(person);
    }

    // Remove a person from the queue
    dequeue(): Inhabitant | undefined {
        if (this.queue.length > 0) {
            const person = this.queue.shift();
            return person;
        } else {
            console.log("No one is in the queue.");
            return undefined;
        }
    }

    // Check the number of people in the queue
    size(): number {
        if (!Array.isArray(this.queue)) {
            console.error("Queue is not properly initialized.", this);
            this.queue = []; 
        }
        return this.queue.length;
    }

    // Returns the average wait time based on the number of people in the queue
    getCurrentWaitTime(): number {
        const waitTimePerPerson = 15; // 15 minutes per person
        const totalWaitTime = this.size() * waitTimePerPerson;
        return totalWaitTime;
    }
}
