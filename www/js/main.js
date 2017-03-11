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

    if(ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
        return true;
    }
    else {
        return false;
    }
}

/* Func02: Display Alert or Message */

// FuncMain: init Stage
function initLayer(images,animals,outlines,stage,gameLayer) {

    var buttonGroup = new Konva.Group(),
        backgroundGroup = new Konva.Group(),
        animalGroup = new Konva.Group();

    var animalShapes = [],
        score = 0;

    var rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 4
    });

    // #data: image positions
    // image positions

    // create draggable animals
    for(var key in animals) {
        // anonymous function to induce scope
        (function() {
            var privKey = key;
            var anim = animals[key];
            var animal = new Konva.Image({
                image: images[key],
                x: anim.x,
                y: anim.y,
                draggable: true
            });
            animal.on('dragstart', function() {
                this.moveToTop();
                animalGroup.draw();
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
                    animalGroup.draw();
                    animal.inRightPlace = true;
                    if(++score >= 4) {
                        var text = 'You win! Enjoy your booty!';
                        drawBackground(background, images.beach, text);
                    }
                    // disable drag and drop
                    setTimeout(function() {
                        animal.draggable(false);
                    }, 50);
                }
            });
            // make animal glow on mouseover
            animal.on('mouseover', function() {
                animal.image(images[privKey + '_glow']);
                animalGroup.draw();
                document.body.style.cursor = 'pointer';
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
            var outline = new Konva.Image({
                image: imageObj,
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
      stage.add(gameLayer);
    };
    imageObj.src = 'img/bg-game-screen.jpg';

    // #buttonGroup
    buttonGroup.add(rect);
    // #gameLayer - Add to Layer
    gameLayer.add(backgroundGroup);
    gameLayer.add(animalGroup);
    gameLayer.add(buttonGroup);

    // #action: click on button to close
    rect.on('click',function(){
        gameLayer.hide();
        gameLayer.draw();
    });

    return gameLayer;
}
function initStage(images) {
  var stage = new Konva.Stage({
      container: 'container',
      width: winWidth,
      height: winHeight
  });
  var gameLayer1 = new Konva.Layer(),
      gameLayer2 = new Konva.Layer();

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

  var vehicles = { snake: { x: 10,y: 70}, giraffe: { x: 90, y: 70}, monkey: {x: 275,y: 70},lion: {x: 400,y: 70} };

  gameLevel1 = initLayer(images,animals,outlines,stage,gameLayer1);
  gameLevel2 = initLayer(images,vehicles,outlines,stage,gameLayer2);
//  stage.add(gameLevel2);
  gameLevel2.hide();
  //gameLevel1.hide();
  stage.draw();
  //stage.add(gameLevel1);
}

/* ------ Load data and run Stage ------ */
//step1: Data: Source Data
var sources = {
    beach: 'beach.png',
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
