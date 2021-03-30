function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototype.die = function(){
	this.dead = true;
}

Mouse.prototype.sleep = function() {
	consolog.log('sleep');
};

// Mouse.prototype.run = function() {
// 	consolog.log('Run');
// };

module.exports = Mouse; 