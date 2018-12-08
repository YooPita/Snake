// class Map
class Map
{
  constructor(w,h)
  {
    this.weight = w;
    this.height = h;
    this.map = [];
    this.Create();
  }
  
  Create()
  {
    for(var i = 0; i < this.height; i++)
    {
      this.map[i] = [];
      for(var j = 0; j < this.weight; j++)
      {
        this.map[i][j] = 0;
      }
    }
  }
  
  Open(nam)
  {
     //open from file
  }
  
  CheckPosition(pos)
  {
    return map[pos.x][pos.y] > 0;
  }
}