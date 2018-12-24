// class Snack
class Snack
{
  constructor(num,w, h) // инициазация еды, w\h - пределы в которых генерируется еда
  {
    this.name = num;
    this.position = new Victor(Math.floor(Math.random() * w),Math.floor(Math.random() * h));
  }
}