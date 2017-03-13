/* Global Variables */
var winWidth = window.innerWidth,
    winHeight = window.innerHeight;

function initStage(sources) {
  var stage = new Konva.Stage({
    container: 'container',
    width: winWidth,
    height: winHeight
  });

  var level = 0;

  var levelLayer = new Konva.Layer();
  //step1: Data: Source Data
  initLayers(sources,stage);

}

/* Load Image data */
function loadImages(sources,callback) {
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

/* Check function: how to check nearby */
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


function initLayers(images,stage){
  var levelLayer = new Konva.Layer();

  var buttonGroup = new Konva.Group(),
      backgroundGroup = new Konva.Group(),
      animalGroup = new Konva.Group();

  var animalShapes = [],
      score = 0;

    // #data: image positions
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
    }


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
                    animalLayer.draw();
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
                        animalLayer.draw();
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
                    animalLayer.draw();
                    document.body.style.cursor = 'pointer';
                });
                // return animal on mouseout
                animal.on('mouseout', function() {
                    animal.image(images[privKey]);
                    animalLayer.draw();
                    document.body.style.cursor = 'default';
                });
                animal.on('dragmove', function() {
                    document.body.style.cursor = 'pointer';
                });
                levelLayer.add(animal);
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
                levelLayer.add(outline);
            })();
        }

  // -------- add to Group and Layers ----
  // #buttonGroup
  //buttonGroup.add(rect);
  // #levelLayer
  //console.log(animalGroup);
  //levelLayer.add(backgroundGroup);
  //levelLayer.add(animalGroup);
  console.log(levelLayer);
  //levelLayer.add(buttonGroup);

  //
  //return levelLayer;
}

/* ------ Load data and run Stage ------ */
//step1: Data: Source Data


//step2: Run Function
loadImages(sources,initLayers);
initStage(sources);
