function Emitter(){
  this._listener = [];
}
Emitter.prototype.on = function(eventName, callback){
  var listener = this._listener[eventName] || [];
  listener.push(callback);
  this._listener[eventName] = listener;
}

Emitter.prototype.once = function(eventName, callback){
  var self = this
  function wraper(){
    callback.apply(self, arguments)
    self.off(eventName)
  }
  this.on(eventName, wraper)
}

Emitter.prototype.off = function(eventName){
  this._listener[eventName] = [];
}

Emitter.prototype.trigger = function(eventName){
  var args = Array.prototype.slice.call(arguments, 1);
  var listener = this._listener[eventName];
  if(!Array.isArray(listener)) return;
  listener.forEach((listener) => {
    try{
      listener.apply(this, args);
    }catch(e){
      console.log(e);
    }
  })
}
