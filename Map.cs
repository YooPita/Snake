using LibFunc;

namespace snakegame
{
    class Map
    {
        int weight;
        int height;
        int[,] map;

        public Map(int w, int h)
        {
            weight = w;
            height = h;
            map = new int[h, w];
            Create();
        }

        public void Create()
        {
            for (int i = 0; i < height; i++)
            {
                for (int j = 0; j < weight; j++)
                {
                    map[i, j] = 0;
                }
            }
        }

        public void Open(string name)
        {

        }

        bool CheckPosition(Point pos)
        {
            return map[pos.X, pos.Y] > 0;
        }
    }
}
