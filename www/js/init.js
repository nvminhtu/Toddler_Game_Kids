
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
  var vehicles = { bird: { x: 10,y: 70}, giraffe: { x: 90, y: 70}, monkey: {x: 275,y: 70},lion: {x: 400,y: 70} };


  //custom width of animals
  //game level 1
  var width_animal = winWidth / 4,
      // #lion
      width_lion = winWidth / 5.5,
      outx_lion = winWidth / 2,
      outy_lion = winHeight / 1.5,
      // #horse
      width_horse = winWidth/ 4,
      inx_horse = winWidth/2 - (winWidth/12);
      outx_horse = winWidth / 1.5,
      outy_horse = winHeight /2,
      // #tahu
      width_tahu = winWidth/ 4,
      inx_tahu = winWidth/2 + (winWidth/5);
      iny_tahu = width_tahu / 4,
      outx_tahu = winWidth / 9,
      outy_tahu = winHeight - (winHeight / 4);

  var animallv1 = { elephant: { x: 0,y: 0, w: width_animal, ratio: 1.1 }, lion: { x: width_animal, y:0 ,w: width_lion, ratio: 1.58}, horse: { x: inx_horse, y:0 ,w: width_horse, ratio: 1.1},tahu: { x: inx_tahu, y:iny_tahu ,w: width_tahu, ratio: 0.59}};
  var outlineslv1 = { elephant_black: { x: 10,y: 300,w: width_animal, ratio: 1.1}, lion_black: { x: outx_lion,y: outy_lion,w: width_lion, ratio: 1.58 },horse_black: { x: outx_horse, y:outy_horse ,w: width_horse, ratio: 1.1},tahu_black: { x: outx_tahu, y:outy_tahu ,w: width_tahu, ratio: 0.59}};
  // game level 2
  var lv1 = 1, lv2 = 2, lv3 = 3, lv4 = 4, lv5 = 5, lv6 = 6, lv7 = 7;
  // #screen: level screen list
  gameLevel1 = initLayer(lv1,images,animallv1,outlineslv1,stage,gameLevel1,gameMain);
  gameLevel2 = initLayer(lv2,images,vehicles,outlineslv1,stage,gameLevel2,gameMain);
  gameLevel3 = initLayer(lv3,images,animals,outlineslv1,stage,gameLevel3,gameMain);
  gameLevel4 = initLayer(lv4,images,vehicles,outlineslv1,stage,gameLevel4,gameMain);
  gameLevel5 = initLayer(lv5,images,vehicles,outlineslv1,stage,gameLevel5,gameMain);
  gameLevel6 = initLayer(lv6,images,vehicles,outlineslv1,stage,gameLevel6,gameMain);
  gameLevel7 = initLayer(lv7,images,vehicles,outlineslv1,stage,gameLevel7,gameMain);

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

  gameLevelScreen = levelLayer(stage,gameMain,gameLevelScreen,gameLevel1,gameLevel2,gameLevel3,gameLevel4,gameLevel5,gameLevel6,gameLevel7);

  // #screen: start main screen

  if(currentlevel === null || currentlevel == 1){
    localStorage.setItem("level","1");
    //gameLevel1 = initLayer(lv=1,images,animallv1,outlineslv1,stage,gameLevel1,gameMain);
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel1);
    //gameLevel1.hide();
    //stage.add(gameLevel1);
  } else if (currentlevel == 2) {
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel2);
    //gameLevel2 = initLayer(lv=2,images,vehicles,outlineslv1,stage,gameLevel2,gameMain);
    //stage.add(gameLevel2);
    //gameLevel2.hide();
  } else if(currentlevel == 3) {
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel3);
    //gameLevel3 = initLayer(lv=3,images,animals,outlineslv1,stage,gameLevel3,gameMain);
    //stage.add(gameLevel3);
    //gameLevel3.hide();
  } else if(currentlevel == 4){
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel4);
    //gameLevel4 = initLayer(lv=4,images,vehicles,outlineslv1,stage,gameLevel4,gameMain);
    //stage.add(gameLevel4);
    //gameLevel4.hide();
  } else if(currentlevel == 5){
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel5);
    //gameLevel5 = initLayer(lv=5,images,vehicles,outlineslv1,stage,gameLevel5,gameMain);
    //stage.add(gameLevel5);
    //gameLevel5.hide();
  } else if(currentlevel == 6){
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel6);
    //gameLevel6 = initLayer(lv=6,images,vehicles,outlineslv1,stage,gameLevel6,gameMain);
    //stage.add(gameLevel6);
    gameLevel6.hide();
  } else {
    gameMain = mainLayer(stage,gameMain,gameLevelScreen,gameLevel7);
    //gameLevel7 = initLayer(lv=7,images,vehicles,outlineslv1,stage,gameLevel7,gameMain);
    //stage.add(gameLevel7);
    //gameLevel7.hide();
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
    bird: 'elephant.png',
    bird_glow: 'elephant-glow.png',
    bird_black: 'elephant-black.png',
    snake: 'snake.png',
    snake_glow: 'snake-glow.png',
    snake_black: 'snake-black.png',
    lion: 'lion.png',
    lion_glow: 'lion-glow.png',
    lion_black: 'lion-black.png',
    monkey: 'snake.png',
    monkey_glow: 'snake-glow.png',
    monkey_black: 'snake-black.png',
    giraffe: 'snake.png',
    giraffe_glow: 'snake-glow.png',
    giraffe_black: 'snake-black.png',
    horse: 'horse.png',
    horse_glow: 'horse-glow.png',
    horse_black: 'horse-black.png',
    elephant: 'elephant.png',
    elephant_glow: 'elephant-glow.png',
    elephant_black: 'elephant-black.png',
    tahu: 'tahu.png',
    tahu_glow: 'tahu-glow.png',
    tahu_black: 'tahu-black.png'
};

//step2: Run Function
loadImages(sources, initStage);
