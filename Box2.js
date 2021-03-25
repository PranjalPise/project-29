class Box2 {
    constructor(x,y,width,height) {
      var options = {
          density:1.2,
          friction:1,
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,{options});
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };