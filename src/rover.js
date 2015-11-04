
function point(x, y) {
    return {
        x: x,
        y: y
    };
}

function Rover(args) {
    this.x = 0;
    this.y = 0;
    this.direction = 0;
    if (args) {
        this.planetCircumference = args.planetCircumference;
    } else {
        this.planetCircumference = 7232000; // the real circumference of Pluto
    }
}

Rover.prototype.move = function(instructions) {
    instructions = instructions.split('');
    instructions.forEach(function(instruction) {
        switch (instruction) {
            case 'F':
                this.moveForward();
                break;
            case 'B':
                this.moveBackward();
                break;
            case 'R':
                this.direction = (this.direction + 1) % 4;
                break;
            case 'L':
                this.direction = (this.direction - 1 + 4) % 4;
        }
    }.bind(this));
};

Rover.prototype.getPosition = function() {
    return point(this.x, this.y);
};

Rover.prototype.getDirection = function() {
    switch (this.direction) {
        case 0:
            return 'N';
        case 1:
            return 'E';
        case 2:
            return 'S';
        case 3:
            return 'W';
    };
};

Rover.prototype.moveBackward = function() {
    this.move('RR');
    this.moveForward();
    this.move('LL');
};

Rover.prototype.moveForward = function() {
    var circimference = this.planetCircumference;
    switch (this.direction) {
        case 0:
            this.y = (this.y + 1) % circimference;
            break;
        case 1:
            this.x = (this.x + 1) % circimference;
            break;
        case 2:
            this.y -= 1;
            break;
        case 3:
            this.x -= 1;
            break;
    }
};

module.exports = {
    Rover: Rover,
    point: point
};
