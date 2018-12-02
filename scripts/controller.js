// class Controller
class Controller
{
  constructor()
  {
    this.snakes = [];
    this.map = [];
  }
  
  InitialisateGame(pla)
  {
    this.map = new Map();
    
    if(pla == 1)
    {
      this.snakes.push(new Snake(new Victor()));
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
  }
}