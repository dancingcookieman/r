var canvas = new fabric.Canvas("myCanvas")

var block_width = 10
var block_height = 10
var player_X = 10
var player_Y = 10
var block_image_object = ""
var player_image_object = ""
function player_render(){
    fabric.Image.fromURL("player.png",function(Img){ //this sets the image from the fabric.js
    player_image_object = Img //this sets the player_image object to the img we set from the fabric.jk
    player_image_object.scaleToWidth(150) //this sets the image's width to 150
    player_image_object.scaletoHeight(140) // this sets the image height to 140
    player_image_object.set({ //this will make the center of the entire image the top left
    top:player_Y,
    left:player_X
    })
    canvas.add(player_image_object); // this will place the image down
    })

}
function new_image(get_Img){
    fabric.Image.fromURL(get_Img,function(Img){
    block_image_object = Img
    block_image_object.scaleToWidth(block_width)
    block_image_object.scaleToHeight(block_height)
    block_image_object.set({
        top:player_Y,
        left:player_X
    })
    canvas.add(block_image_object)
    })
}
window.addEventListener("keydown",keypressed)
function keypressed(e){
    var keypushed = e.keyCode
    console.log(keypushed)
    if (e.shiftKey == true && keypushed == '80'){
        console.log("blocksize up");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keypushed == '77'){
        console.log("blocksize down");
        block_width = block_width + -10;
        block_height = block_height + -10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keypushed == '38'){
    //    up()
        console.log("up")
    }
    if(keypushed == '40'){
    //    down()
        console.log("down")
    }
    if(keypushed == '37'){
    //    left()
        console.log("left")
    }
    if(keypushed == '39'){
    //    right()
        console.log("right")
    }
    if(keypushed == '48'){
        new_image("cloud.jpg")
        console.log("cloud")
    }
    if(keypushed == '49'){
        new_image("dark_green.png")
        console.log("dark_green")
    }
    if(keypushed == '50'){
        new_image("ground.png")
        console.log("ground")
    }
    if(keypushed == '51'){
        new_image("light_green.png")
        console.log("light_green")
    }
    if(keypushed == '52'){
        new_image("roof.jpg")
        console.log("roof")
    }
    if(keypushed == '53'){
        new_image("trunk.jpg")
        console.log("trunk")
    }
    if(keypushed == '54'){
        new_image("unique.png")
        console.log("unique")
    }
    if(keypushed == '55'){
        new_image("wall.jpg")
        console.log("wall")
    }
    if(keypushed == '56'){
        new_image("yellow_wall.png")
        console.log("yellow_wall")
    }
}