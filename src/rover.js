
function point(x, y) {
    return {
        x: x,
        y: y
    };
}

function Rover() {
    this.x = 0;
    this.y = 0;
    this.direction = 0;
}

Rover.prototype.move = function(instructions) {
    instructions = instructions.split('');
    instructions.forEach(function(instruction) {
        switch (instruction) {
            case 'F':
                this.moveForward();
                break;
            case 'B':
                this.y -= 1;
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

Rover.prototype.moveForward = function() {
    switch (this.direction) {
        case 0:
            this.y += 1;
            break;
        case 1:
            this.x += 1;
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
