
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

    // #apptitle
    var appTitleObj = new Image(),
        posTitlex = (winWidth/2) - (winWidth/4),
        posTitley = (winHeight/2),
        titleWidth = winWidth,
        titleHeight = titleWidth * 156/358;
    appTitleObj.onload = function(){
      var titlebtn = new Konva.Image({
        x: 0,
        y: 0,
        image: appTitleObj,
        width: titleWidth,
        height: titleHeight
      });
      buttonGroup.add(titlebtn);
      gameMain.add(buttonGroup);
      gameMain.draw();
    };
    appTitleObj.src = 'img/app-title.png';

    // #button: group of buttons
   //button play
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
        posLevely = (winHeight/2) + playHeight + (playHeight/4),
        levelWidth = winWidth/2,
        levelHeight = levelWidth * 102/315;
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
    levelObj.src = 'img/btn-levels.png';

    // #button-exit
    var exitObj = new Image(),
        posExitx = (winWidth/2) - (winWidth/4),
        posExity = (winHeight/2) + (playHeight*2) + (playHeight/2),
        exitWidth = winWidth/2,
        exitHeight = exitWidth * 102/315;
    exitObj.onload = function(){
      var exitbtn = new Konva.Image({
        x: posExitx,
        y: posExity,
        image: exitObj,
        width: exitWidth,
        height: exitHeight
      });
      buttonGroup.add(exitbtn);
      gameMain.add(buttonGroup);
      gameMain.draw();

      exitbtn.on('touchend click', function(evt) {
        window.close();
      });

    };
    exitObj.src = 'img/btn-exit.png';

    // #gameMain - Add to Layer
    gameMain.add(backgroundGroup);
    gameMain.add(buttonGroup);
    gameMain.draw();
    return gameMain;
}
