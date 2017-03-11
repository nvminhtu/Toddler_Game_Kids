
function initStage(images) {
  var stage = new Konva.Stage({
      container: 'container',
      width: winWidth,
      height: winHeight
  });
  var
    gameMain = new Konva.Layer();
    gameLayer1 = new Konva.Layer(),
    gameLayer2 = new Konva.Layer();

  var animals = {
      snake: {
          x: 10,
          y: 70
      },
      giraffe: {
          x: 90,
          y: 70
      },
      monkey: {
          x: 275,
          y: 70
      },
      lion: {
          x: 400,
          y: 70
      }
  };
  var outlines = {
      snake_black: {
          x: 275,
          y: 350
      },
      giraffe_black: {
          x: 390,
          y: 250
      },
      monkey_black: {
          x: 300,
          y: 420
      },
      lion_black: {
          x: 100,
          y: 390
      }
  };

  var vehicles = { bird: { x: 10,y: 70}, giraffe: { x: 90, y: 70}, monkey: {x: 275,y: 70},lion: {x: 400,y: 70} };
  var outlines2 = {
      bird_black: {
          x: 275,
          y: 350
      },
      giraffe_black: {
          x: 390,
          y: 250
      },
      monkey_black: {
          x: 300,
          y: 420
      },
      lion_black: {
          x: 100,
          y: 390
      }
  };

  var rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4
  });

  gameMain.add(rect);
  stage.add(gameMain);
  rect.on('click',function(){
      gameMain.hide();
      stage.draw();
  });
  //gameLevel1 = initLayer(images,animals,outlines,stage,gameLayer1);
  gameLevel2 = initLayer(images,vehicles,outlines2,stage,gameLayer2);
  stage.add(gameLevel2);
//  gameLevel2.hide();
  //gameLevel1.hide();
  //stage.draw();
  //stage.add(gameLevel1);
}
/* ------ Load data and run Stage ------ */
//step1: Data: Source Data
var sources = {
    beach: 'beach.png',
    bird: 'bird.png',
    bird_glow: 'bird-glow.png',
    bird_black: 'bird-black.png',
    snake: 'snake.png',
    snake_glow: 'snake-glow.png',
    snake_black: 'snake-black.png',
    lion: 'snake.png',
    lion_glow: 'snake-glow.png',
    lion_black: 'snake-black.png',
    monkey: 'snake.png',
    monkey_glow: 'snake-glow.png',
    monkey_black: 'snake-black.png',
    giraffe: 'snake.png',
    giraffe_glow: 'snake-glow.png',
    giraffe_black: 'snake-black.png'
};

//step2: Run Function
loadImages(sources, initStage);
