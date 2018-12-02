// class Controller
function Controller()
{
  this.snakes = [];
  this.map;
  
  this.InitialisateGame = function(pla)
  {
    this.map = new Map();
    this.map.Create();
  }
  
  this.CheckCollision = function(snake)
  {
    pos = snake.GetNextPosition();
    this.map.CheckPosition();
  }
}