// class Map
function Map()
{
  this.weight = 256/8;
  this.height = 224/8;
  this.map[0] = [];
  
  
  this.Create = function()
  {
    for(i = 0; i < this.height; i++)
    {
      for(j = 0; j < this.weight; j++)
      {
        this.map[j][i] = 0;
      }
    }
  }
  
  this.Open = function(nam)
  {
     //open from file
  }
  
  this.CheckPosition = function(pos)
  {
    return map[pos.x][pos.y] > 0;
  }
}