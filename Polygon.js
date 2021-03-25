class Polygon {
    constructor(x,y,width,height) {
      var options = {
          density:0.8,
          friction:0.6,
         
      }
      this.image=loadImage("sprites/polygon.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width,this.height);
     pop();
    }
  };