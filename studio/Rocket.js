"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = "";
        this.totalCapacityKg = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        if (items) {
            for (var i = 0; i < items.length; i++) {
                sum = sum + items[i].massKg;
            }
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var sum = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return sum;
    };
    Rocket.prototype.canAdd = function (items) {
        if ((this.currentMassKg() + items.massKg) <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
