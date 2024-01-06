class UberPriceCalculator {
    constructor(ratePerKilometer, ratePerMinute) {
        this.ratePerKilometer = ratePerKilometer;
        this.ratePerMinute = ratePerMinute;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
        const distanceCost = distanceInKilometers * this.ratePerKilometer;
        const timeCost = timeInMinutes * this.ratePerMinute;

        const totalPrice = distanceCost + timeCost;
        return totalPrice;
    }
}


const standardUberRates = new UberPriceCalculator(0.5, 0.1); 
const distance = 10; 
const time = 15;

const totalCost = standardUberRates.calculatePrice(distance, time);
console.log(totalCost.toFixed(2));
