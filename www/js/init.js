
function initStage(images) {
  var stage = new Konva.Stage({
      container: 'container',
      width: winWidth,
      height: winHeight
  });

  var
    gameMain = new Konva.Layer();
    gameLevelScreen = new Konva.Layer();
    gameLevel1 = new Konva.Layer(),
    gameLevel2 = new Konva.Layer(),
    gameLevel3 = new Konva.Layer(),
    gameLevel4 = new Konva.Layer(),
    gameLevel5 = new Konva.Layer();
    gameLevel6 = new Konva.Layer();
    gameLevel7 = new Konva.Layer();

  var currentlevel = localStorage.getItem("level");

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
      }
  };
  var animallv1 = { elephant: { x: 10,y: 70}, bird: { x: 90, y: 70} };
  var outlineslv1 = { elephant_black: { x: 10,y: 300}, bird_black: { x: 90, y: 900} };

  // #screen: level screen list
  gameLevel1 = initLayer(lv=1,images,animallv1,outlineslv1,stage,gameLevel1,gameMain);
  gameLevel2 = initLayer(lv=2,images,vehicles,outlines2,stage,gameLevel2,gameMain);
  gameLevel3 = initLayer(lv=3,images,animals,outlines,stage,gameLevel3,gameMain);
  gameLevel4 = initLayer(lv=4,images,vehicles,outlines2,stage,gameLevel4,gameMain);
  gameLevel5 = initLayer(lv=5,images,vehicles,outlines2,stage,gameLevel5,gameMain);
  gameLevel6 = initLayer(lv=6,images,vehicles,outlines,stage,gameLevel6,gameMain);
  gameLevel7 = initLayer(lv=7,images,vehicles,outlines2,stage,gameLevel7,gameMain);

  gameLevelScreen = levelLayer(stage,gameMain,gameLevelScreen,gameLevel1,gameLevel2,gameLevel3,gameLevel4,gameLevel5,gameLevel6,gameLevel7);

  // #screen: start main screen
  stage.add(gameLevel1);
  stage.add(gameLevel2);
  stage.add(gameLevel3);
  stage.add(gameLevel4);
  stage.add(gameLevel5);
  stage.add(gameLevel6);
  stage.add(gameLevel7);
  gameLevel1.hide();
  gameLevel2.hide();
  gameLevel3.hide();
  gameLevel4.hide();
  gameLevel5.hide();
  gameLevel6.hide();
  gameLevel7.hide();

  if(currentlevel === null || currentlevel == 1){
    localStorage.setItem("level","1");
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel1);
  } else if (currentlevel == 2) {
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel2);
  } else if(currentlevel == 3) {
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel3);
  } else if(currentlevel == 4){
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel4);
  } else if(currentlevel == 5){
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel5);
  } else if(currentlevel == 6){
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel6);
  } else {
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel7);
  }

  //gameLevelScreen.hide();
  stage.add(gameMain);
  stage.add(gameLevelScreen);
  gameLevelScreen.hide();
  stage.draw();
}
/* ------ Load data and run Stage ------ */
//step1: Data: Source Data
var sources = {
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
    giraffe_black: 'snake-black.png',
    elephant: 'elephant.png',
    elephant_glow: 'elephant-glow.png',
    elephant_black: 'elephant-black.png'
};

//step2: Run Function
loadImages(sources, initStage);
