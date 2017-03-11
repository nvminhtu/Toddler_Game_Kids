
function initStage(images) {
  var stage = new Konva.Stage({
      container: 'container',
      width: winWidth,
      height: winHeight
  });

  var
    gameMain = new Konva.Layer();
    gameLayer1 = new Konva.Layer(),
    gameLayer2 = new Konva.Layer(),
    gameLayer3 = new Konva.Layer(),
    gameLayer4 = new Konva.Layer(),
    gameLayer5 = new Konva.Layer();

  var currentlevel = localStorage.getItem("level");
  if(currentlevel === null) {
    localStorage.setItem("level","1");
  }
  // #data: elements for draging and drop
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

  // #screen: level screen list
  gameLevel1 = initLayer(lv=1,images,animals,outlines,stage,gameLayer1,gameMain);
  gameLevel2 = initLayer(lv=2,images,vehicles,outlines2,stage,gameLayer2,gameMain);
  gameLevel3 = initLayer(lv=3,images,vehicles,outlines2,stage,gameLayer2,gameMain);
  gameLevel4 = initLayer(lv=4,images,vehicles,outlines2,stage,gameLayer2,gameMain);
  gameLevel5 = initLayer(lv=5,images,vehicles,outlines2,stage,gameLayer2,gameMain);

  // #screen: start main screen
  if(currentlevel === null || currentlevel == 1){
    stage.add(gameLevel1);
    gameLevel1.hide();
  } else if (currentlevel == 2) {
    stage.add(gameLevel2);
    gameLevel2.hide();
  } else if(currentlevel == 3) {
    stage.add(gameLevel3);
    gameLevel3.hide();
  } else if(currentlevel == 4){
    stage.add(gameLevel4);
    gameLevel4.hide();
  } else {
    stage.add(gameLevel5);
    gameLevel5.hide();
  }

  gameMain = mainLayer(stage,gameMain,gameLevel1);
  stage.add(gameMain);
  stage.draw();
  //stage.add(gameLevel2);
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
