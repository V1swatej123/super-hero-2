var canvas = new fabric.Canvas(myCanvas);

var player_object = "";
var player_x = 400;
var player_y = 10;
var block_width = 30;
var block_height = 30;
var block_object = "";

function create() {
    fabric.Image.fromURL("player (1).png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(10);
        player_object.scaleToHeight(140);
        player_object.set({
            left: player_x,
            right: player_y
        });
        canvas.add(player_object);

    });
}

function blockCreate(get_image) {
    fabric.Image.fromURL( get_image, function(Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            left: player_x,
            right: player_y
        });
        canvas.add(block_object);

    });
}

create();

window.addEventListener("keydown", pressed);

function pressed (e) {
    var code = e.keyCode;
    console.log(code);

    if ( e.shiftKey == true && code == '80' ){
        console.log("shift and p is pressed");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("a").innerHTML = block_width;
        document.getElementById("b").innerHTML = block_height;
    }
    if ( e.shiftKey == true && code == '77' ){
        console.log("shift and m is pressed");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("a").innerHTML = block_width;
        document.getElementById("b").innerHTML = block_height;
    }

    if ( code == '38' ){
      console.log("up");
      up();
    }
    if ( code == '40' ){
        console.log("down");
        down();
    }
    if ( code == '37' ){
        console.log("left");
        left();
      }
      if ( code == '39' ){
        console.log("right");
        right();
      }

      if ( code == '70'){
        blockCreate('ironman_face.png')
        console.log("face");
      }
      if ( code == '82'){
        blockCreate('ironman_right_hand.png')
        console.log("right");
      }
      if ( code == '72'){
        blockCreate('ironman_left_hand.png')
        console.log("head");
      }
      if ( code == '76'){
        blockCreate('ironman_legs.png')
        console.log("head");
      }
      if ( code == '66'){
        blockCreate('ironman_body.png')
        console.log("body");
      }

    function up(){}
    function down(){}
    function left(){}
    function right(){}
}

