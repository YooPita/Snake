// class Map
function Map(w, h)
{
  this.weight = w;
  this.height = h;
  this.map = [];
  
  this.Create = function()
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
  
  this.Open = function(nam)
  {
     //open from file
  }
  
  this.CheckPosition = function(pos)
  {
    return map[pos.x][pos.y] > 0;
  }
}