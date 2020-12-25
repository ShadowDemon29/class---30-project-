class Block extends BaseClass.js{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("polygon.png");
      Matter.Body.setAngle(this.body, angle);
      this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
    }
  }