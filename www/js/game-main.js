
// FuncMain: init Stage
function mainLayer(stage,gameMain,gameLevelScreen,gameLevel) {

    var buttonGroup = new Konva.Group(),
        backgroundGroup = new Konva.Group();

    // #background: add background game screen
    var imageObj = new Image();
    var ratio = 400 / 700; //width divine height
    var ratio_win = winWidth / winHeight;
    var scaleX = 1, scaleY = 1;

    if(ratio_win > ratio) { //width thực tế to hơn
      scaleX = 1;
      scaleY = 1.2;
    } else {
      scaleX = 1.2;
      scaleY = 1;
    }

    imageObj.onload = function() {
      var yoda = new Konva.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: winWidth,
        height: winHeight,
        scaleX: scaleX,
        scaleY: scaleY
      });

      backgroundGroup.add(yoda);
      gameMain.add(buttonGroup);
      gameMain.draw();
    };
    imageObj.src = 'img/bg-start-screen.png';

    // #button: group of buttons
    var playObj = new Image(),
        posPlayx = (winWidth/2) - (winWidth/4),
        posPlayy = (winHeight/2),
        playWidth = winWidth/2,
        playHeight = playWidth * 102/315;
    playObj.onload = function(){
      var playbtn = new Konva.Image({
        x: posPlayx,
        y: posPlayy,
        image: playObj,
        width: playWidth,
        height: playHeight
      });
      buttonGroup.add(playbtn);
      gameMain.add(buttonGroup);
      gameMain.draw();

      playbtn.on('touchend click', function(evt) {
        gameMain.hide();
        gameLevel.visible = true;
        gameLevel.show();
        gameLevel.draw();
      });

    };
    playObj.src = 'img/btn-play.png';

    var levelObj = new Image(),
        posLevelx = (winWidth/2) - (winWidth/4),
        posLevely = (winHeight/2) + playHeight,
        levelWidth = winWidth/2,
        levelHeight = levelWidth * 200/400;
    levelObj.onload = function(){
      var levelbtn = new Konva.Image({
        x: posLevelx,
        y: posLevely,
        image: levelObj,
        width: levelWidth,
        height: levelHeight
      });
      buttonGroup.add(levelbtn);
      gameMain.add(buttonGroup);
      gameMain.draw();

      levelbtn.on('touchend click', function(evt) {
        gameMain.hide();
        gameLevelScreen.visible = true;
        gameLevelScreen.show();
        gameLevelScreen.draw();
      });

    };
    levelObj.src = 'img/btn-play.png';

    // #gameMain - Add to Layer
    gameMain.add(backgroundGroup);
    gameMain.add(buttonGroup);
    gameMain.draw();
    return gameMain;
}
