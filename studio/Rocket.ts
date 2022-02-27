import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    name: string = ""; 
    totalCapacityKg: number = 0; 
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number){
        this.name = name; 
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let sum:number = 0; 
        if(items){
        for(let i=0; i<items.length; i++){
            sum = sum + items[i].massKg;
        }
        }
        return sum;
    }

    currentMassKg(): number {
        let sum: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return sum; 
    }

    canAdd(items: Payload): boolean{
        if((this.currentMassKg() + items.massKg) <= this.totalCapacityKg){
            return true; 
        } else {
            return false; 
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo); 
            return true; 
        } else {
            return false; 
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)){
            this.astronauts.push(astronaut); 
            return true; 
        } 
        return false; 
    }

}