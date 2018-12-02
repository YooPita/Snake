// Lib of functions

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