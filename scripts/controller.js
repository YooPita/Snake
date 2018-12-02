// class Controller
class Controller
{
  constructor()
  {
    this.snakes = [];
    this.map;
  }
  
  InitialisateGame(pla)
  {
    this.map = new Map();
    
    if(pla == 1)
    {
      var a = new Victor(Math.floor(this.map.weight / 2), Math.floor(this.map.height / 2));
      this.snakes.push(new Snake(a, 3));
    }
  }
  
  Step()
  {
    this.snakes.forEach(function(element)
    {
      if(this.CheckCollision(element)==1) // if next step to collider
      {
        element.Die();  // kill this snake
      }
      else
      {
        element.MoveYourself(); // move this snake
      }
    });
  }
  
  CheckCollision(snake)
  {
    pos = snake.GetNextPosition();
    this.map.CheckPosition();
    
    return 0;
  }
}