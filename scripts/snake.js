// class Snake
function Snake(nam, pos, len)
{
  this.name = nam;
  this.alive = true;
  this.body = [pos];
  this.snack = [];
  this.addTale = false;
  this.masterRotate = 0; // 0 up, 1 right etc
  this.rotate = 0; // -1 left, 1 right
  
  this.SnackMove = function()
  {
    if (this.snack.lenght>0)
    {
      for(i = 0; i <= this.snack.lenght; i++)
      {
        this.snack[i]++;
        if(this.snack[i]>=this.body.lenght)
        {
          this.addTale = True;
          break;
        }
      }
    }
  };
  
  this.MoveYourself = function()
  {
    var nex = this.GetNextPosition;
    
    for(i = this.body.lenght-1; i > 0; i--)
    {
      if(this.addTale)
      {
        this.addTale = false;
        this.body.push(this.body[i]);
      }
      if(this.body[i] == this.body[i-1]) continue;
      this.body[i] = this.body[i-1];
    }
    
    this.body[0] = nex;
  };
  
  this.GetNextPosition = function()
  {
    var rot = this.ConvertRotation(this.rotate);
    //this.masterRotate = rot;
    //this.rotate = 0;
    return this.body[0] + rot;
  };
  
  this.DevideYourself = function(a)
  {
    //create snake
  }
  
  this.CheckNextStep = function()
  {
    var nex = this.GetNextPosition();
    //check collision
  }
  
  this.Die = function()
  {
    this.alive = false;
  }
  
  function ConvertRotation(a)
  {
    a += this.rotate;
    if(a < 0) a = 4;
    else if(a > 4) a = 0;
    
    switch(a)
    {
      case 0:
        return Victor(0, -1);
      case 1:
        return Victor(1, 0);
      case 2:
        return Victor(0, 1);
      default:
        return Victor(-1, 0);
    }
  }
}
