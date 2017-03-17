/* Global Variables */
var winWidth = window.innerWidth,
    winHeight = window.innerHeight;

/* Func01: Calculate drag & drop */
function loadImages(sources, callback) {
    var assetDir = 'pic/';
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    for(var src in sources) {
        numImages++;
    }
    for(var src in sources) {
        images[src] = new Image();
        images[src].onload = function() {
            if(++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = assetDir + sources[src];
    }
}

function isNearOutline(animal, outline) {
    var a = animal;
    var o = outline;
    var ax = a.getX();
    var ay = a.getY();

    if(ax > o.x - 5 && ax < o.x + 5 && ay > o.y - 5 && ay < o.y + 5) {
        return true;
    }
    else {
        return false;
    }
}

/* Func02: Display Alert or Message */

// FuncMain: init Stage
function initLayer(lv,images,animals,outlines,stage,gameLayer,gameMain) {

    var buttonGroup = new Konva.Group(),
        backgroundGroup = new Konva.Group(),
        animalGroup = new Konva.Group();

    var animalShapes = [],
        score = 0;

    // #data: image positions
    // image positions

    // create draggable animals
    for(var key in animals) {
        // anonymous function to induce scope
        (function() {
            var privKey = key;
            var anim = animals[key];
            var anim_height = anim.w * anim.ratio;
            var animal = new Konva.Image({
                image: images[key],
                x: anim.x,
                y: anim.y,
                width: anim.w,
                height: anim_height,
                draggable: true
            });
            animal.on('dragstart', function() {
                this.moveToTop();
                animalGroup.draw();
                //sound
                var dragelement = new Audio("audio/drag-start.wav");
                dragelement.play();
            });
            /*
             * check if animal is in the right spot and
             * snap into place if it is
             */
            animal.on('dragend', function() {
                var outline = outlines[privKey + '_black'];
                if(!animal.inRightPlace && isNearOutline(animal, outline)) {
                    animal.position({
                        x : outline.x,
                        y : outline.y
                    });
                    animal.image(images[privKey + '_glow']);
                    animalGroup.draw();

                    // sound when done
                    var dropdone = new Audio("audio/drop-success.wav");
                    dropdone.play();

                    animal.inRightPlace = true;
                    if(++score >= 4) {
                      //  var text = 'You win! Enjoy your booty!';

                    }
                    // disable drag and drop
                    setTimeout(function() {
                        animal.draggable(false);
                    }, 50);
                }
            });
            // make animal glow on mouseover
            animal.on('mouseenter', function() {
                // animal.image(images[privKey + '_glow']);
                // animalGroup.draw();
                // document.body.style.cursor = 'pointer';
            });
            // return animal on mouseout
            animal.on('mouseout', function() {
                animal.image(images[privKey]);
                animalGroup.draw();
                document.body.style.cursor = 'default';
            });
            animal.on('dragmove', function() {
                document.body.style.cursor = 'pointer';
            });
            animalGroup.add(animal);
            animalShapes.push(animal);
        })();
    }
    // create animal outlines
    for(var key in outlines) {
        // anonymous function to induce scope
        (function() {
            var imageObj = images[key];
            var out = outlines[key];
            var out_height = out.w * out.ratio;
            var outline = new Konva.Image({
                image: imageObj,
                width: out.w,
                height: out_height,
                x: out.x,
                y: out.y
            });
            animalGroup.add(outline);
        })();
    }

    // #background: add background game screen
    var imageObj = new Image();
    var ratio = 400 / 700; //width divine height
    var ratio_win = winWidth / winHeight;
    var scaleX = 1, scaleY = 1;

    if(ratio_win > ratio) { //width thực tế to hơn
      scaleX = 1;
      scaleY = 1;
    } else {
      scaleX = 1;
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
      gameLayer.add(backgroundGroup);
      gameLayer.draw();
    };

    if(lv==1) {
      imageObj.src = 'img/bg-field.png';
    } else if(lv==2) {
      imageObj.src = 'img/bg-sea.png';
    } else if(lv==3) {
      imageObj.src = 'img/bg-farm.png';
    } else {
      imageObj.src = 'img/bg-game-screen.jpg';
    }

    var homeObj = new Image();
    var home_width = winWidth / 12,
        home_height = home_width * 109/120,
        home_y = winHeight - (home_height * 1.5);

    homeObj.onload = function() {
      var home = new Konva.Image({
        x: 0,
        y: home_y,
        image: homeObj,
        width: home_width,
        height: home_height
      });

      buttonGroup.add(home);
      gameLayer.add(buttonGroup);
      gameLayer.draw();

      home.on('click touchend',function(){
          gameLayer.hide();
          gameLayer.draw();
          gameMain.show();
      });
    };
    homeObj.src = 'img/home-button.png';

    var heightWrap = winWidth*30/100;
    var wrapitems = new Konva.Rect({
      x: 0,
      y: 0,
      width: winWidth,
      height: heightWrap,
      fill: '#6E4C29',
      stroke: '#271608',
      opacity: 1,
      strokeWidth: 2
    });

    // #buttonGroup
    buttonGroup.add(wrapitems);

    // #gameLayer - Add to Layer
    gameLayer.add(backgroundGroup);
    gameLayer.add(buttonGroup);
    gameLayer.add(animalGroup);

    // #action: click on button to close
    wrapitems.on('click touchend',function(){
        gameLayer.hide();
        gameLayer.draw();
        gameMain.show();
        var levelup = lv + 1;
        localStorage.setItem('level', levelup);

        var audio = new Audio("audio/click.wav");
        audio.play();
    });


    var audioType;

    var audio = new Audio();
    if (audio.canPlayType("audio/mp3")) {
        audioType = ".mp3";
    } else {
        audioType = ".wav";
    }

    return gameLayer;
}
