// class Controller
class Controller
{
  constructor()
  {
    this.factor = 8;    // фактор увеличения
    this.weight = 256;  // ширина игры
    this.height = 224;  // высота игры
    this.snakes = [];   // массив змей
    this.snacks = [];   // массив еды
    this.map;           // текущая карта
  }
  
  InitialisateGame(pla) // инициализация игровой сессии
  {
    this.map = new Map(this.weight / this.factor, this.height / this.factor); // создание карты
    
    if(pla == 1)  // если игроков = 1
    {
      var a = new Victor(Math.floor(this.map.weight / 2), Math.floor(this.map.height / 2)); // середина карты
      this.snakes.push(new Snake(a, 3));  // создаём змею длиной 3
      let left = keyboard("ArrowLeft"),
          up = keyboard("ArrowUp"),
          right = keyboard("ArrowRight"),
          down = keyboard("ArrowDown");
      
      up.press = () => { this.snakes[0].rotate = 0; };  // вешаем управление на кнопки
      right.press = () => { this.snakes[0].rotate = 1; };
      down.press = () => { this.snakes[0].rotate = 2; };
      left.press = () => { this.snakes[0].rotate = 3; };
      
    };
  }
  
  Step()  // дейсивие, которое происходит каждый кадр
  {
    this.snakes.forEach(function(item)
    {

      /*if(new CheckCollision(item)) // if next step to collider
      {
        item.Die();  // kill this snake
      }
      else
      {
        item.MoveYourself(); // move this snake
      }*/
      item.MoveYourself();
    });
  }

  CheckCollision()  // функция проверки точки на карте
  {
    /*pos = snake.GetNextPosition();
    this.map.CheckPosition();*/

    return 0;
  }
}