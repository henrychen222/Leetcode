/**
 * 10.3 morning
 * https://leetcode.com/contest/biweekly-contest-36/problems/design-parking-system/
 */

// Accepted
function ParkingSystem(big, medium, small) {
    this.p = { 'b': big, 'm': medium, 's': small };
};

ParkingSystem.prototype.addCar = function (carType) {
    if (carType == 1) {
        if (this.p['b'] == 0) {
            return false;
        } else {
            this.p['b']--;
            return true;
        }
    } else if (carType == 2) {
        if (this.p['m'] == 0) {
            return false;
        } else {
            this.p['m']--;
            return true;
        }
    } else {
        if (this.p['s'] == 0) {
            return false;
        } else {
            this.p['s']--;
            return true;
        }
    }
};

const main = () => {
    let parkingSystem = new ParkingSystem(1, 1, 0);
    console.log(parkingSystem.addCar(1)); // return true because there is 1 available slot for a big car
    console.log(parkingSystem.addCar(2)); // return true because there is 1 available slot for a medium car
    console.log(parkingSystem.addCar(3)); // return false because there is no available slot for a small car
    console.log(parkingSystem.addCar(1)); // return false because there is no available slot for a big car. It is already occupied.

    console.log("");
    let parkingSystem2 = new ParkingSystem(0, 0, 2);
    console.log(parkingSystem2.addCar(1));  // false
    console.log(parkingSystem2.addCar(2));  // false
    console.log(parkingSystem2.addCar(3));  // true
};

main()