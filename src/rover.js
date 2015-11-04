
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
        this.planetCircumference = args.planetCircumference || 7232000;
        this.obstacles = args.obstacles || [];
    } else {
        this.planetCircumference = 7232000; // the real circumference of Pluto
        this.obstacles = [];
    }
}

Rover.prototype.move = function(instructions) {
    instructions = instructions.split('');
    var obstacleEncountered = false;
    instructions.forEach(function(instruction) {
        if (obstacleEncountered) {
            console.log('returning');
            return;
        }
        var oldX = this.x;
        var oldY = this.y;
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
        obstacleEncountered = this.obstacles.some(function(obstacle) {
            return obstacle.x === this.x &&
                obstacle.y === this.y;
        }.bind(this));
        if (obstacleEncountered) {
            console.log('encountered');
            this.x = oldX;
            this.y = oldY;
        }
        console.log(obstacleEncountered);
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
    var circumference = this.planetCircumference;
    var xMax = Math.floor(circumference / 2);
    var yMax = Math.floor(circumference / 2);
    var xMin = Math.floor((circumference - 1) / 2) || 0;
    var yMin = Math.floor((circumference - 1) / 2) || 0;
    switch (this.direction) {
        case 0:
            if (this.y === yMax) {
                this.y = yMin;
            } else {
                this.y += 1;
            }
            break;
        case 1:
            if (this.x === xMax) {
                this.x = xMin;
            } else {
                this.x += 1;
            }
            break;
        case 2:
            if (this.y === yMin) {
                this.y = yMax;
            } else {
                this.y -= 1;
            }
            break;
        case 3:
            if (this.x === xMin) {
                this.x = xMax;
            } else {
                this.x -= 1;
            }
            break;
    }
};

module.exports = {
    Rover: Rover,
    point: point
};
