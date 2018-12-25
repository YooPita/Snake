// class Controller
function Controller()
{
  this.factor = 8;    // фактор увеличения
  this.weight = 256;  // ширина игры
  this.height = 224;  // высота игры
  this.snakes = [];   // массив змей
  this.snack;         // объект еды
  this.map;           // текущая карта
  
  this.InitialisateGame = function(pla) // инициализация игровой сессии
  {
    // создание карты
    this.map = new Map(this.weight / this.factor, this.height / this.factor); // создание карты
    this.map.Create();
    
    // создание игрока
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
    
    // создание еды
    this.CreateSnack();
    
  }
  
  this.Step = function()  // дейсивие, которое происходит каждый кадр
  {
    //  действия для каждой змеи
    this.snakes.forEach(function(item)
    {
      /*
      // проверяем, жива ли змея?
      if(item.alive)
      {
        let nextPos = item.GetNextPosition();
        // проверяем следующую позицию
        let col = this.CheckCollision(new Victor(0, 0));
        if(col == 0)
        {
          item.MoveYourself(nextPos);
        }
        else
        {
          item.Die();
        }
      }*/
      let nextPos = item.GetNextPosition();
      item.MoveYourself(nextPos);
    });
  }
  
  // 0 - пусто
  // 1 - смерть
  // 2 - еда
  this.CheckCollision = function(vec)  // функция проверки точки на карте
  {
    /*pos = snake.GetNextPosition();
    this.map.CheckPosition();*/

    return 0;
  }
  
  this.CreateSnack = function() // сгенерировать еду
  {
    let w = this.weight / this.factor;
    let h = this.height / this.factor;
    let x;
    let y;
    let a = 1;
    while(a > 0)
    {
      x = Math.floor(Math.random() * w);
      y = Math.floor(Math.random() * h);
      a = this.CheckCollision(new Victor(x, y));
    }
    let vec = new Victor(x, y);
    this.snack = new Snack(vec);
  }
}