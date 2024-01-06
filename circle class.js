class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example Usage
const circle = new Circle(5);
console.log('Radius:', circle.getRadius());
console.log('Area:', circle.getArea());
console.log('Circumference:', circle.getCircumference());

// Update radius and recalculate
circle.setRadius(8);
console.log('Updated Radius:', circle.getRadius());
console.log('Updated Area:', circle.getArea());
console.log('Updated Circumference:', circle.getCircumference());
