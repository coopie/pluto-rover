
function point(x, y) {
    return {
        x: x,
        y: y
    };
}

function Rover() {
    this.x = 0;
    this.y = 0;
}

Rover.prototype.move = function (instructions) {
    switch (instructions) {
        case 'F':
            this.y += 1;
            console.log('sdasdasd');
            break;
        case 'B':
            this.y -= 1;
            break;
        default:

    }
};

Rover.prototype.getPosition = function () {
    return point(this.x, this.y);
};


module.exports = {
    Rover: Rover,
    point: point
};
