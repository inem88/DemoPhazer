function Plugin2(){
    this.logo = null;
}

Plugin2.prototype.prepare = function(world){
    world.game.load.image('logo', 'phaser.png');
}

Plugin2.prototype.initialize = function(world){
}

Plugin2.prototype.step = function(world){
    for(var obj in world.objs)
        world.objs[obj].dispatch({type: 'STEP_LEFT'});
}