// FuncMain: init Stage
function levelLayer(stage,gameMain,gameLevelScreen,gameLevel1,gameLevel2,gameLevel3,gameLevel4,gameLevel5,gameLevel6,gameLevel7) {
    var winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        titleWidth = (winWidth)- (winWidth/8),
        titleHeight = titleWidth * (78/520),
        titleX = (winWidth/8) / 2;
        titley = (titleHeight/4);


    var btnWidth = winWidth/2.5,
        btnHeight = btnWidth * 117/150,
        firstrow = btnHeight / 2 + (btnHeight/4) ,
        rowHeight2 = btnHeight * 2,
        rowHeight3 = (btnHeight * 3) + (btnHeight/4),
        pos_col3 = btnWidth*2,
        pos_row3 = btnHeight*2;

    var buttonGroup = new Konva.Group(),
        backgroundGroup = new Konva.Group();

    // #button: title level
    var titleObj = new Image();
    titleObj.onload = function(){
    var titlebtn = new Konva.Image({
        x: titleX,
        y: titley,
        image: titleObj,
        width: titleWidth,
        height: titleHeight
      });
      buttonGroup.add(titlebtn);
      buttonGroup.draw();
    };
    titleObj.src = 'img/choose-level.png';

    // #button: group of buttons
    // #btn_level1
    var level1_Obj = new Image();
    level1_Obj.onload = function(){
    var level1_btn = new Konva.Image({
        x: (btnWidth/6),
        y: firstrow,
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
        soundClick();
      });

    };
    level1_Obj.src = 'img/level-1.png';

    // #btn_level2
    var level2_Obj = new Image();
    level2_Obj.onload = function(){
      var level2_btn = new Konva.Image({
        x: btnWidth + ((btnWidth/3)),
        y: firstrow,
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
        soundClick();
      });

    };
    level2_Obj.src = 'img/level-2.png';

    // #btn_level3
    var level3_Obj = new Image();
    level3_Obj.onload = function(){
      var level3_btn = new Konva.Image({
        x: (btnWidth/6),
        y: rowHeight2,
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
        soundClick();
      });

    };
    level3_Obj.src = 'img/level-3.png';

    // #btn_level4
    var level4_Obj = new Image();
    level4_Obj.onload = function(){
      var level4_btn = new Konva.Image({
        x: btnWidth + ((btnWidth/3)),
        y: rowHeight2,
        image: level4_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level4_btn);
      buttonGroup.draw();

    };
    level4_Obj.src = 'img/level-4.png';

    // #btn_level5
    var level5_Obj = new Image();
    level5_Obj.onload = function(){
      var level5_btn = new Konva.Image({
        x: (btnWidth/6),
        y: rowHeight3,
        image: level5_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level5_btn);
      buttonGroup.draw();

    };
    level5_Obj.src = 'img/level-5.png';

    // #btn_level6
    var level6_Obj = new Image();
    level6_Obj.onload = function(){
      var level6_btn = new Konva.Image({
        x: btnWidth + ((btnWidth/3)),
        y: rowHeight3,
        image: level6_Obj,
        width: btnWidth,
        height: btnHeight
      });
      buttonGroup.add(level6_btn);
      buttonGroup.draw();

    };
    level6_Obj.src = 'img/level-6.png';

    gameLevelScreen.add(backgroundGroup);
    gameLevelScreen.add(buttonGroup);

    return gameLevelScreen;
}

function background(group) {

}
