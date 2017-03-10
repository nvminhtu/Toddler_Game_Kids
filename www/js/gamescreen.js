    /* Global Variables */
    var width = window.innerWidth;
    var height = window.innerHeight;

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

    /* Func02: Display Message */
    function drawBackground(background, beachImg, text) {
        var context = background.getContext();
        context.drawImage(beachImg, 0, 0);
        context.setAttr('font', '20pt Calibri');
        context.setAttr('textAlign', 'center');
        context.setAttr('fillStyle', 'white');
        context.fillText(text, background.getStage().getWidth() / 2, 40);
    }

    // event: button click
    function getMousePos(canvas, event) {
    	var rect = canvas.getBoundingClientRect();
    	return {
    		x: event.clientX - rect.left,
    		y: event.clientY - rect.top
    	};
    }

    // event: check inSide
    function isInside(pos, rect){
    	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
    }

    // init Game
    function initStage(images) {
        var stage = new Konva.Stage({
            container: 'gamescreen',
            width: 578,
            height: 530
        });
        var background = new Konva.Layer();
        var animalLayer = new Konva.Layer();
        var buttonLayer = new Konva.Layer();
        var animalShapes = [];
        var score = 0;

        var rect = new Konva.Rect({
          x: 50,
          y: 50,
          width: 100,
          height: 50,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 4
        });

        var text = new Konva.Text({
          x: 10,
          y: 10,
          fontFamily: 'Calibri',
          fontSize: 24,
          text: '',
          fill: 'black'
        });

        /* Func09: Debug and Display information */
        function writeMessage(message) {
          text.setText(message);
          background.draw();
        }

        rect.on('click',function(){
          writeMessage('Click on Rectangle');
        });
        // image positions
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

                animalLayer.add(animal);
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

                animalLayer.add(outline);
            })();
        }

        // Add to Layer
        buttonLayer.add(rect);
        buttonLayer.add(text);
        stage.add(background);
        stage.add(animalLayer);
        stage.add(buttonLayer);

        drawBackground(background, images.beach, 'Ahoy! Put the animals on the beach!');
    }

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

    //run program
    loadImages(sources, initStage);
