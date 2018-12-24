// class Snake
class Snake
{
  constructor(pos, len) // инициализация змеи
  {
    this.alive = true;  // жива или мертва
    this.body = [pos];  // массив тела
    this.snack = [];  // массив еды
    this.addTale = false; // нужно ли в текущем ходу добавить элемент в тело?
    this.masterRotate = 0; // глобальный поворот змеи, 0 up, 1 right etc
    this.rotate = 0; // поворот, который выбрал игрок, 0 up, 1 right etc
    
    if(len > 1) // генерация тела
    {
      for(let i = 1; i < len; i++)
      {
        this.body.push(pos);
      }
    }
  }
  
  SnackMove() // сдвинуть еду
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
  
  MoveYourself()  // сдвинуть змею
  {
    let nex = this.GetNextPosition();
    for (let i = this.body.length-1; i > 0; i--)
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
  
  GetNextPosition() // получение следующей позиции
  {
    let dif = RotationDifference(this.masterRotate, this.rotate);
    let rotnor = RotationNormalize(this.masterRotate + dif);
    let rot = RotationConvert(rotnor);
    this.masterRotate = rotnor;
    return new Victor(rot.x + this.body[0].x, rot.y + this.body[0].y);
  }
  
  DevideYourself(a) // разделить себя
  {
    //create snake
  }
  
  Die() // проиграть)
  {
    this.alive = false;
  }
}
