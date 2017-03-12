
// FuncMain: init Stage
function mainLayer(stage,gameMain,gameLevel) {

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
      backgroundGroup.draw();
    };
    imageObj.src = 'img/bg-game-screen.jpg';

    // #button: group of buttons
    var playObj = new Image();
    playObj.onload = function(){
      var playbtn = new Konva.Image({
        x: 50,
        y: 50,
        image: playObj,
        width: 200,
        height: 80
      });
      buttonGroup.add(playbtn);
      buttonGroup.draw();

      playbtn.on('click', function(evt) {
        gameMain.hide();
        gameLevel.visible = true;
        gameLevel.show();
        gameLevel.draw();
      });

    };
    playObj.src = 'img/btn-play.png';

    var levelObj = new Image();
    levelObj.onload = function(){
      var levelbtn = new Konva.Image({
        x: 50,
        y: 100,
        image: levelObj,
        width: 200,
        height: 80
      });
      buttonGroup.add(levelbtn);
      buttonGroup.draw();

      levelbtn.on('click', function(evt) {
        gameMain.hide();
        gameLevel.visible = true;
        gameLevel.show();
        gameLevel.draw();
      });

    };
    levelObj.src = 'img/btn-play.png';

    // #gameMain - Add to Layer
    gameMain.add(backgroundGroup);
    gameMain.add(buttonGroup);

    return gameMain;
}
