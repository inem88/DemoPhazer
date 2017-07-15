var world = function(store, width, height){
    var self = this;
    self.store = store;
    self.game = new Phaser.Game(width, height, Phaser.AUTO, '', { 
        preload: function(){self.prepare();},
        create: function(){self.initialize();},
        update: function(){self.update();}
    });    
    self.plugins = {};
    self.objs = {};
}

world.prototype.addPlugin = function(name, plugin){
    this.plugins[name] = plugin;    
}

world.prototype.addObj = function(name, obj){
    this.objs[name] = obj;
}

world.prototype.prepare = function(){
    for(var plugin in this.plugins){
        this.plugins[plugin].prepare(this);
    }  
}

world.prototype.initialize = function () {
    for(var plugin in this.plugins){
        this.plugins[plugin].initialize(this);
    }  
}

world.prototype.update = function(){
    for(var plugin in this.plugins){
        this.plugins[plugin].step(this);
    }  
}  