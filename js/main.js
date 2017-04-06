var cuadrado = document.getElementById('cuadrado');
var contenedor = document.getElementById('contenedor');
document.addEventListener("keydown", mover);

var avanzarX = 0;
var avanzarY = 0;
var movimiento = 40;

function mover(event){
  var tecla = event.keyCode;
  switch (tecla) {
    case 37:
      avanzarX = avanzarX - movimiento;
      if(avanzarX < 0){
        finDelJuego();
      }else{
      cuadrado.style.marginLeft = avanzarX +"px";
    }
      break;
    case 38:
      avanzarY = avanzarY - movimiento;
      if(avanzarY < 0){
        finDelJuego();
    } else{
      cuadrado.style.marginTop = avanzarY + 'px';
    }
      break;
    case 39:
      avanzarX = avanzarX + movimiento;
      if(avanzarX > 500){
        finDelJuego();
      } else{
      cuadrado.style.marginLeft = avanzarX + 'px';
    }
     break;
    case 40:
      avanzarY = avanzarY + movimiento;
      if( avanzarY > 500){
        finDelJuego();
      } else {
      cuadrado.style.marginTop = avanzarY + 'px';
    }
    break;
  }
}

function finDelJuego(){
  alert( " Fin del juego");
  document.removeEventListener("keydown", mover);
}

function reiniciar(){
  var avanzarX = 0;
  var avanzarY = 0;
  cuadrado.style.marginTop = avanzarY;
  cuadrado.style.marginLeft = avanzarX;
  document.addEventListener("keydown", mover);
}
