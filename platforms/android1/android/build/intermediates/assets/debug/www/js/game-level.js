// FuncMain: init Stage
function levelLayer(stage,gameMain,gameLevelScreen,gameLevel1,gameLevel2,gameLevel3,gameLevel4,gameLevel5,gameLevel6,gameLevel7) {
    var winWidth = window.innerWidth,
        winHeight = window.innerHeight;

    var btnWidth = winWidth/3,
        btnHeight = btnWidth/2,
        pos_col3 = btnWidth*2,
        pos_row3 = btnHeight*2;

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
    // #btn_level1
    var level1_Obj = new Image();
    level1_Obj.onload = function(){
    var level1_btn = new Konva.Image({
        x: 0,
        y: 0,
        image: level1_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level1_btn);
      buttonGroup.draw();

      level1_btn.on('touchend click', function(evt) {
        gameLevelScreen.hide();
        gameLevel1.visible = true;
        gameLevel1.show();
        gameLevel1.draw();
      });

    };
    level1_Obj.src = 'img/level-1.png';

    // #btn_level2
    var level2_Obj = new Image();
    level2_Obj.onload = function(){
      var level2_btn = new Konva.Image({
        x: btnWidth,
        y: 0,
        image: level2_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level2_btn);
      buttonGroup.draw();

      level2_btn.on('touchend click', function(evt) {
        gameLevelScreen.hide();
        gameLevel2.visible = true;
        gameLevel2.show();
        gameLevel2.draw();
      });

    };
    level2_Obj.src = 'img/level-2.png';

    // #btn_level3
    var level3_Obj = new Image();
    level3_Obj.onload = function(){
      var level3_btn = new Konva.Image({
        x: pos_col3,
        y: 0,
        image: level3_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level3_btn);
      buttonGroup.draw();

      level3_btn.on('touchend click', function(evt) {
        gameLevelScreen.hide();
        gameLevel3.visible = true;
        gameLevel3.show();
        gameLevel3.draw();
      });

    };
    level3_Obj.src = 'img/level-3.png';

    // #btn_level4
    var level4_Obj = new Image();
    level4_Obj.onload = function(){
      var level4_btn = new Konva.Image({
        x: 0,
        y: btnHeight,
        image: level4_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level4_btn);
      buttonGroup.draw();

      level4_btn.on('touchend click', function(evt) {
        gameLevelScreen.hide();
        gameLevel4.visible = true;
        gameLevel4.show();
        gameLevel4.draw();
      });

    };
    level4_Obj.src = 'img/level-4.png';

    // #btn_level5
    var level5_Obj = new Image();
    level5_Obj.onload = function(){
      var level5_btn = new Konva.Image({
        x: btnWidth,
        y: btnHeight,
        image: level5_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level5_btn);
      buttonGroup.draw();

      level5_btn.on('touchend click', function(evt) {
        gameLevelScreen.hide();
        gameLevel5.visible = true;
        gameLevel5.show();
        gameLevel5.draw();
      });

    };
    level5_Obj.src = 'img/level-5.png';

    // #btn_level6
    var level6_Obj = new Image();
    level6_Obj.onload = function(){
      var level6_btn = new Konva.Image({
        x: pos_col3,
        y: btnHeight,
        image: level6_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level6_btn);
      buttonGroup.draw();

      level6_btn.on('touchend click', function(evt) {
        gameLevelScreen.hide();
        gameLevel6.visible = true;
        gameLevel6.show();
        gameLevel6.draw();
      });

    };
    level6_Obj.src = 'img/level-6.png';

    gameLevelScreen.add(backgroundGroup);
    gameLevelScreen.add(buttonGroup);

    return gameLevelScreen;
}

function background(group) {

}
