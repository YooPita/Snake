using LibFunc;
using System.Collections.Generic;

namespace snakegame
{
    class Snake
    {
        public bool alive
        {
            get
            {
                return Alive;
            }
        }
        bool Alive { get; set; }                // жива или мертва
        public List<Point> body { get; set; }   // массив тела
        List<int> snack { get; set; }           // массив еды
        bool addTale { get; set; }              // нужно ли в текущем ходу добавить элемент в тело?
        Rotation masterRotate { get; set; }     // глобальный поворот змеи, 0 up, 1 right etc
        Rotation rotate { get; set; }           // поворот, который выбрал игрок, 0 up, 1 right etc

        public Snake(Point pos, int len)
        {
            Alive = true;
            addTale = false;
            body = new List<Point>();
            snack = new List<int>();
            masterRotate = 0;
            rotate = 0;

            if (len > 1)    // генерация тела
            {
                for (int i = 0; i < len; i++)
                {
                    body.Add(pos);
                }
            }
        }

        public void SnackMove() // сдвинуть еду
        {
            if (snack.Count > 1)
            {
                int del = 0;
                for (int i = 0; i < snack.Count; i++)
                {
                    snack[i]++;
                    if (snack[i] >= body.Count)
                    {
                        addTale = true;
                        del = i;
                    }
                }
                snack.RemoveAt(del);
            }
        }

        public void MoveYourself(Point nexPos)  // сдвинуть змею
        {
            for (int i = body.Count - 1; i > 0; i--)
            {
                if (addTale)
                {
                    addTale = false;
                    body.Add(body[i]);
                }
                if (body[i] == body[i - 1]) continue;
                body[i] = body[i - 1];
            }
            body[0] = nexPos;
        }

        public Point GetNextPosition()  // получение следующей позиции
        {
            var dif = masterRotate.GetDifference(rotate);
            var rotnor = masterRotate + dif;
            var rot = rotnor.point;
            masterRotate = rotnor;
            return new Point(rot.X + body[0].X, rot.Y + body[0].Y);
        }

        public void DevideYourself(int a)  // разделить себя
        {

        }

        public void Die()   // проиграть)
        {
            Alive = false;
        }
    }
}
