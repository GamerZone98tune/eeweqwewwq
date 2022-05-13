tintcolour=""
function preload()
{

}
function setup(){
    canvas=createCanvas(500,400)
    canvas.position(300,150)
    video=createCapture(VIDEO)
    video.hide()

}
function draw(){
    image(video,0,0,500,400)
    tint(tintcolour)
}
function take_snapshot(){
    save("mypicture.png")
}
function applyFilter(){
    tintcolour=document.getElementById("color").value
}
