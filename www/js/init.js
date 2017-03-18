
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

  //game level 1: forest
  //custom width of animals
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

  //game level 2: sea
  var width_animal = winWidth / 4,
      // #lion
      width_fish = winWidth / 5.5,
      outx_fish = winWidth / 2,
      outy_fish = winHeight / 2,
      // #craft
      width_craft = winWidth/ 4,
      inx_craft = winWidth/2 - (winWidth/12);
      outx_craft = winWidth / 1.5,
      outy_craft = winHeight  - (winHeight / 6),
      // #shrimp
      width_shrimp = winWidth/ 4,
      inx_shrimp = winWidth/2 + (winWidth/5);
      iny_shrimp = width_shrimp / 4,
      outx_shrimp = winWidth / 10,
      outy_shrimp = (winHeight / 2) - (winHeight / 4),
      // #shrimp
      width_sea_star = winWidth/ 4,
      inx_sea_star = winWidth/2,
      iny_sea_star = width_sea_star / 4,
      outx_sea_star = winWidth / 9,
      outy_sea_star = winHeight - (winHeight / 5);

  var animallv2 = { fish: { x: 0,y: 10, w: width_animal, ratio: 0.87 }, craft: { x: width_animal, y:0 ,w: width_craft, ratio: 0.95}, shrimp: { x: inx_shrimp, y:0 ,w: width_shrimp, ratio: 1.1},sea_star: { x: inx_sea_star, y:iny_sea_star ,w: width_sea_star, ratio: 0.95}};
  var outlineslv2 = { fish_black: { x: outx_fish,y: outy_fish,w: width_animal, ratio: 0.87}, craft_black: { x: outx_craft,y: outy_craft,w: width_craft, ratio: 0.95 },shrimp_black: { x: outx_shrimp, y: outy_shrimp ,w: width_shrimp, ratio: 1.1},sea_star_black: { x: outx_sea_star, y:outy_sea_star ,w: width_sea_star, ratio: 0.95}};

  //game level 3: sea
  var width_animal = winWidth / 4,
      // #cow
      width_cow = winWidth / 5.5,
      outx_cow = winWidth / 2,
      outy_cow = winHeight / 2,
      // #horse
      width_horse_farm = winWidth/ 4,
      inx_horse_farm = winWidth/2 - (winWidth/12);
      outx_horse_farm = winWidth / 1.5,
      outy_horse_farm = winHeight  - (winHeight / 6),
      // #pig
      width_pig = winWidth/ 4,
      inx_pig = winWidth/2 + (winWidth/5);
      iny_pig = width_pig / 4,
      outx_pig = winWidth / 10,
      outy_pig = (winHeight / 2) - (winHeight / 4),
      // #shrimp
      width_roaster = winWidth/ 4,
      inx_roaster = winWidth/2,
      iny_roaster = width_roaster / 4,
      outx_roaster = winWidth / 9,
      outy_roaster = winHeight - (winHeight / 5);

  var animallv3 = { cow: { x: 0,y: 10, w: width_animal, ratio: 0.57 }, horse_farm: { x: width_animal, y:0 ,w: width_horse_farm, ratio: 0.95}, pig: { x: inx_pig, y:0 ,w: width_pig, ratio: 1.1},roaster: { x: inx_roaster, y:iny_roaster ,w: width_roaster, ratio: 0.95}};
  var outlineslv3 = { cow_black: { x: outx_fish,y: outy_fish,w: width_animal, ratio: 0.57}, horse_farm_black: { x: outx_horse_farm,y: outy_horse_farm,w: width_craft, ratio: 0.95 },pig_black: { x: outx_pig, y: outy_pig ,w: width_shrimp, ratio: 1.1},roaster_black: { x: outx_roaster, y:outy_roaster ,w: width_roaster, ratio: 0.95}};

  // game level list
  var lv1 = 1, lv2 = 2, lv3 = 3, lv4 = 4, lv5 = 5, lv6 = 6, lv7 = 7;
    // #screen: level screen list
  gameLevel1 = initLayer(lv = 1,images,animallv1,outlineslv1,stage,gameLevel1,gameMain);
  gameLevel2 = initLayer(lv = 2,images,animallv2,outlineslv2,stage,gameLevel2,gameMain);
  gameLevel3 = initLayer(lv = 3,images,animallv3,outlineslv3,stage,gameLevel3,gameMain);
  gameLevel4 = initLayer(lv = 4,images,animallv1,outlineslv1,stage,gameLevel4,gameMain);
  gameLevel5 = initLayer(lv = 5,images,animallv1,outlineslv1,stage,gameLevel5,gameMain);
  gameLevel6 = initLayer(lv = 6,images,animallv1,outlineslv1,stage,gameLevel6,gameMain);
  gameLevel7 = initLayer(lv = 7,images,animallv1,outlineslv1,stage,gameLevel7,gameMain);

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
    lion: 'forest/lion.png',
    lion_glow: 'forest/lion-glow.png',
    lion_black: 'forest/lion-black.png',
    horse: 'forest/horse.png',
    horse_glow: 'forest/horse-glow.png',
    horse_black: 'forest/horse-black.png',
    elephant: 'forest/elephant.png',
    elephant_glow: 'forest/elephant-glow.png',
    elephant_black: 'forest/elephant-black.png',
    tahu: 'forest/tahu.png',
    tahu_glow: 'forest/tahu-glow.png',
    tahu_black: 'forest/tahu-black.png',
    fish: 'sea/fish.png',
    fish_glow: 'sea/fish-glow.png',
    fish_black: 'sea/fish-black.png',
    craft: 'sea/craft.png',
    craft_glow: 'sea/craft-glow.png',
    craft_black: 'sea/craft-black.png',
    shrimp: 'sea/shrimp.png',
    shrimp_glow: 'sea/shrimp-glow.png',
    shrimp_black: 'sea/shrimp-black.png',
    sea_star: 'sea/sea-star.png',
    sea_star_glow: 'sea/sea-star-glow.png',
    sea_star_black: 'sea/sea-star-black.png',
    cow: 'farm/cow.png',
    cow_glow: 'farm/cow-glow.png',
    cow_black: 'farm/cow-black.png',
    horse_farm: 'farm/horse.png',
    horse_farm_glow: 'farm/horse-glow.png',
    horse_farm_black: 'farm/horse-black.png',
    pig: 'farm/pig.png',
    pig_glow: 'farm/pig-glow.png',
    pig_black: 'farm/pig-black.png',
    roaster: 'farm/roaster.png',
    roaster_glow: 'farm/roaster-glow.png',
    roaster_black: 'farm/roaster-black.png'
};

//step2: Run Function
loadImages(sources, initStage);

// Load sounds
var bgsound = new Audio("audio/bg-sound.wav");
bgsound.loop = true;
//bgsound.play();
