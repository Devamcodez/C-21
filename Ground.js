class Ground{
constructor(x,y,width,height){
this.x=x
this.y=y 
this.w=width
this.h=height
}
show(){
rectMode(CENTER)
fill(255)
rect(this.position.x,this.position.y,this.width,this.height)
}
}