// class Draw
class Draw
{
  constructor(con)
  {
    this.factor = 3;
    //Create a Pixi Application
    let app = new PIXI.Application(
      {
        width: con.weight,
        height: con.height,
        antialias: true,    // default: false
        transparent: false, // default: false
        resolution: 2       // default: 1
      });
    
    /*con.snakes.forEach(function(item, i, arr) {
      alert( i + ": " + item.body[0].x );
    });*/
    
    var graphics = new PIXI.Graphics();
    app.stage.addChild(graphics);
    
    app.ticker.add(function(delta){
      graphics.clear();
      graphics.beginFill(0xF8F8FF, 1);
      
      con.snakes.forEach(function(item, i, arr) {
        item.body.forEach(function(item, i, arr) {
          graphics.drawRect(item.x * con.factor, item.y * con.factor, 8, 8);
        });
        //alert( i + ": " + item.body[0].x );
      });
      
      
    });
    
    /*app.ticker.add(function(delta){
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xF8F8FF, 1);
        
        con.snakes.forEach(function(item, i, arr) {
          item.body.forEach(function(item, i, arr) {
            graphics.drawRect(item.x * con.factor, item.y * con.factor, 8, 8);
          });
          //alert( i + ": " + item.body[0].x );
        });
        
        app.stage.addChild(graphics);
      });*/
    
    
    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);
  }
  
  DrawRectangle()
  {
    
  }
}