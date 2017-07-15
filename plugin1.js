function Plugin1(){
    this.logo = null;
}

Plugin1.prototype.prepare = function(world){
    world.game.load.image('logo', 'phaser.png');
}

Plugin1.prototype.initialize = function(world){
    var self = this;
    world.addObj( 'obj1', Redux.createStore(function(state, action){
            if (typeof state === 'undefined') {
              return {x: 0.1, y: 0.1};
            }

            if(action.type == 'RANDOM'){
                return {x: state.x+(Math.random()-0.5)*0.003,
                       y: state.y+(Math.random()-0.5)*0.003};
            }
            if(action.type == 'STEP_LEFT'){
                return {x: state.x-0.001, y: state.y};
            }
        })
    );
    this.logo2 = world.game.add.sprite(world.objs['obj1'].x, world.objs['obj1'].y, 'logo');
    this.logo = world.game.add.sprite(world.objs['obj1'].x, world.objs['obj1'].y, 'logo');
    world.objs['obj1'].subscribe(function(){
        var state = world.objs['obj1'].getState();
        var state = world.objs['obj1'].getState();
        self.logo.anchor.setTo(state.x, state.y);
    });
}

Plugin1.prototype.step = function(world){
    world.objs['obj1'].dispatch({type: 'RANDOM'});
}