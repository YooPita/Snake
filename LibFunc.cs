using System;
using System.Collections.Generic;

namespace LibFunc
{
    struct Point
    {
        #region variables
        public int X { get; private set; }

        public int Y { get; private set; }

        static public Point zero
        {
            get
            {
                return 0;
            }
        }

        static public Point up
        {
            get
            {
                return new Point(0, -1);
            }
        }

        static public Point down
        {
            get
            {
                return new Point(0, 1);
            }
        }

        static public Point left
        {
            get
            {
                return new Point(-1, 0);
            }
        }

        static public Point right
        {
            get
            {
                return new Point(1, 0);
            }
        }
        #endregion

        #region basic
        public Point(int x, int y)
        {
            X = x;
            Y = y;
        }

        public Point(int x)
        {
            X = x;
            Y = X;
        }

        public static implicit operator Point(int x)
        {
            return new Point
            {
                X = x,
                Y = x
            };
        }
        #endregion

        #region calculation
        public static Point operator +(Point vec1, Point vec2)
        {
            return new Point(vec1.X + vec2.X, vec1.Y + vec2.Y);
        }

        public static Point operator -(Point vec1, Point vec2)
        {
            return new Point(vec1.X - vec2.X, vec1.Y - vec2.Y);
        }

        public static Point operator *(Point vec1, Point vec2)
        {
            return new Point(vec1.X * vec2.X, vec1.Y * vec2.Y);
        }

        public static Point operator *(Point vec1, int num)
        {
            return new Point(vec1.X * num, vec1.Y * num);
        }

        public static Point operator /(Point vec1, Point vec2)
        {
            return new Point(vec1.X / vec2.X, vec1.Y / vec2.Y);
        }

        public static Point operator /(Point vec1, int num)
        {
            return new Point(vec1.X / num, vec1.Y / num);
        }
        #endregion

        #region logics
        public static bool operator ==(Point vec1, Point vec2)
        {
            return vec1.X == vec2.X && vec1.Y == vec2.Y;
        }

        public static bool operator !=(Point vec1, Point vec2)
        {
            return !(vec1.X == vec2.X && vec1.Y == vec2.Y);
        }

        public override bool Equals(object obj)
        {
            if (!(obj is Point))
            {
                return false;
            }

            var point = (Point)obj;
            return X == point.X &&
                   Y == point.Y;
        }

        public override int GetHashCode()
        {
            var hashCode = 1861411795;
            hashCode = hashCode * -1521134295 + X.GetHashCode();
            hashCode = hashCode * -1521134295 + Y.GetHashCode();
            return hashCode;
        }
        #endregion
    }

    struct Rotation
    {
        #region variables
        private int value { get; set; }

        public Point point
        {
            get
            {
                return RotationConvert(value);
            }
        }
        #endregion

        #region basic
        public static implicit operator Rotation(int x)
        {
            return new Rotation()
            {
                value = x
            };
        }

        public static implicit operator int(Rotation d)
        {
            return d.value;
        }

        public static implicit operator string(Rotation d)
        {
            return d.value.ToString();
        }

        public Rotation GetDifference(Rotation a)
        {
            var c = value - a.value;
            if (Math.Abs(c) == 2 || c == 0) return 0;
            if (c < 0) c += 2;
            else c -= 2;
            return c;
        }
        #endregion

        #region calculation
        public static Rotation operator +(Rotation a, Rotation b)
        {
            return RotationNormalize(a.value + b.value);
        }

        public static Rotation operator -(Rotation a, Rotation b)
        {
            return RotationNormalize(a.value - b.value);
        }

        public static Rotation operator *(Rotation a, Rotation b)
        {
            return RotationNormalize(a.value * b.value);
        }
        #endregion

        #region static
        private static int RotationNormalize(Rotation a)
        {
            if (a.value < 0) a.value = 3;
            else if (a.value > 3) a.value = 0;
            return a.value;
        }

        public static Point RotationConvert(Rotation a)
        {
            switch (a.value)
            {
                case 0:
                    return Point.up;
                case 1:
                    return Point.right;
                case 2:
                    return Point.down;
                default:
                    return Point.left;
            }
        }

        public static Rotation RotationDifference(Rotation a, Rotation b)
        {
            var c = a.value - b.value;
            if (Math.Abs(c) == 2 || c == 0) return 0;
            if (c < 0) c += 2;
            else c -= 2;
            return c;
        }
        #endregion
    }
}