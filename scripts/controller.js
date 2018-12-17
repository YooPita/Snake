// class Controller
class Controller
{
  constructor()
  {
    this.factor = 8;
    this.weight = 256;
    this.height = 224;
    this.snakes = [];
    this.map;
  }
  
  InitialisateGame(pla)
  {
    this.map = new Map(this.weight / this.factor, this.height / this.factor);
    
    if(pla == 1)
    {
      var a = new Victor(Math.floor(this.map.weight / 2), Math.floor(this.map.height / 2));
      this.snakes.push(new Snake(a, 3));
      let left = keyboard("ArrowLeft"),
          up = keyboard("ArrowUp"),
          right = keyboard("ArrowRight"),
          down = keyboard("ArrowDown");
      
      up.press = () => { this.snakes[0].rotate = 0; };
      right.press = () => { this.snakes[0].rotate = 1; };
      down.press = () => { this.snakes[0].rotate = 2; };
      left.press = () => { this.snakes[0].rotate = 3; };
      
    };
  }
  
  Step()
  {
    this.snakes.forEach(function(item)
    {

      /*if(new CheckCollision(item)) // if next step to collider
      {
        item.Die();  // kill this snake
      }
      else
      {
        item.MoveYourself(); // move this snake
      }*/
      item.MoveYourself();
    });
  }

  CheckCollision()
  {
    /*pos = snake.GetNextPosition();
    this.map.CheckPosition();*/

    return 0;
  }
}