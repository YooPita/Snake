// class Map
class Map
{
  constructor()
  {
    this.weight = 256/8;
    this.height = 224/8;
    this.map[0] = [];
    this.Create();
  }
  
  Create()
  {
    for(i = 0; i < this.height; i++)
    {
      for(j = 0; j < this.weight; j++)
      {
        this.map[j][i] = 0;
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