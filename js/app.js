// Enemies our player must avoid


var Enemy = function(x,y) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 20;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    /*
    Handles collision with the Player*/
    this.x = this.x + (dt * this.speed);
    if(this.x > 505) {
        this.x = 0;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 0;
    this.y = 400;
};

Player.prototype.reset = function() {
    this.x = 0;
    this.y = 400;
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/*var enemy = new Enemy(-450,60);
var enemy2 = new Enemy(-400,230);
var enemy3 = new Enemy(-250,60);*/
var enemy4 = new Enemy(-50,230);
/*var enemy5 = new Enemy(-200,145);
var enemy6 = new Enemy(-500,145);*/

var allEnemies = [enemy4/*,enemy2,enemy3,enemy4,enemy5*/];

var player = new Player();


Player.prototype.update = function() {
    var that = this;
    
    var enemy = allEnemies[0];
 
    //console.log('enemy:',Math.round(enemy.x)/*, Math.round(element.y)*/);
    //console.log('player',this.x);
    if(enemy.x === this.x) {
        console.log('boom');
    }
    
    
};

Player.prototype.handleInput = function(keyPress) {
    if(keyPress === 'left' && this.x > 50) {
        this.x -= 100;
    } else if(keyPress === 'right' && this.x <400){
        this.x += 100;
    } else if(keyPress === 'up' && this.y > 50) {
        this.y -= 85;
    } else if(keyPress === 'down' && this.y < 400) {
        this.y += 85;
    }
    var position = [this.x,this.y];
    //this.update(position);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
