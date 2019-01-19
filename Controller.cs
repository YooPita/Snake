using LibFunc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace snakegame
{
    class Controller
    {
        public delegate void ChangeDirection(int dir);
        public event ChangeDirection changeDirection;

        int factor = 8;     // фактор увеличения
        int weight = 256;   // ширина игры
        int height = 224;   // высота игры
        List<Snake> snakes; // массив змей
        Snack snack;        // объект еды
        Map map;            // текущая карта

        public void InitialisateGame(int numPlayers)
        {
            // создание карты
            map = new Map(weight / factor, height / factor);
            
            // создание игроков
            if (numPlayers==1)
            {
                var pos = new Point(weight/2, height/2);  // середина карты

                Input.GetKeyDown("space");
                //var left = keyboard("")
            }
        }
    }
}
