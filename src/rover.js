
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
    this.y = 1;
};

Rover.prototype.getPosition = function () {
    return point(this.x, this.y);
};


module.exports = {
    Rover: Rover,
    point: point
};
