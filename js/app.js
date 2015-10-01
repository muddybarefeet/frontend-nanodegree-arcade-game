// Enemies our player must avoid


var Enemy = function(x,y) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 40;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (dt * this.speed);
    if(this.x > 505) {
        this.x = 0;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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


var enemy = new Enemy(-450,60);
var enemy2 = new Enemy(-400,230);
var enemy3 = new Enemy(-250,60);
var enemy4 = new Enemy(-50,230);
var enemy5 = new Enemy(-200,145);
var enemy6 = new Enemy(-500,145);

var allEnemies = [enemy,enemy2,enemy3,enemy4,enemy5,enemy6];

var player = new Player();


Player.prototype.update = function() {

    var playerMid = [this.x + 33, this.y + 38];
    var sumHalfWidths = 49 + 38;
    var sumHalfHeights = 33 + 30;

    var xOverlap = false, yOverlap = false;

    for(var i=0; i<allEnemies.length; i++){

        var ce = allEnemies[i];
        var ceMid = [ce.x + 30, ce.y + 49];


        //do x's overlap
        if(Math.abs(playerMid[0] - ceMid[0]) < sumHalfWidths){
            xOverlap = true;
        }

        //do y's overlap
        if(Math.abs(playerMid[1] - ceMid[1]) < sumHalfHeights){
            yOverlap = true;
        }

        //if both overlap, collission!
        if(xOverlap === true && yOverlap === true) {
            this.reset();
        }
        xOverlap = false;
        yOverlap = false;
        
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
