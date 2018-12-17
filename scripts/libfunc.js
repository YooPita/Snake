// Lib of functions

function RotationNormalize(a)
{
  if(a < 0) a = 4;
  else if(a > 3) a = 0;
  return a;
}

function RotationConvert(a)
{
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

function RotationDifference(a, b) // a - MasterRotate
{
  let c = a - b;
  if(Math.abs(c) == 2 || c == 0) return 0;
  if(c < 0) c += 2;
  else c -= 2;
  return c;
}

// https://github.com/kittykatattack/learningPixi#keyboard
function keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
    
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
    
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    
    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );
    
    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
    };
    
    return key;
  }