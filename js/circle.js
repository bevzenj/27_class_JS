class Circle {
    constructor(options) {
        this.radius = options.radius
    }

    get radiusInfo() {
        return this.radius
    }

    set radiusInfo(newRadius) {
        this.radius = newRadius
    }

    get diameter() {
        return this.radius * 2
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    circumference() {
        return (2 * Math.PI) * this.radius
    }
}

const circle = new Circle({
    radius: 22.5
});

console.log(circle.radiusInfo);
console.log(circle.diameter);
console.log(circle.area());
console.log(circle.circumference());