// class Snake
class Snake
{
  constructor(pos, len)
  {
    this.alive = true;
    this.body = [pos];
    this.snack = [];
    this.addTale = false;
    this.masterRotate = 0; // 0 up, 1 right etc
    this.rotate = 0; // -1 left, 1 right
    
    if(len > 1) // set lenght
    {
      for(var i = 1; i < len; i++)
      {
        this.body.push(pos);
      }
    }
  }
  
  SnackMove()
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
  }
  
  MoveYourself()
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
  }
  
  GetNextPosition()
  {
    var rot = this.ConvertRotation(this.rotate);
    //this.masterRotate = rot;
    //this.rotate = 0;
    return this.body[0] + rot;
  }
  
  DevideYourself(a)
  {
    //create snake
  }
  
  CheckNextStep()
  {
    var nex = this.GetNextPosition();
    //check collision
  }
  
  Die()
  {
    this.alive = false;
  }
}
