class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  // this is for the visibility of pig.
    this.Visibility = 255;
  }
 display(){
  // here we can check the speed of the pig in console. 
   console.log(this.body.speed);
   if(this.body.speed < 3){
     super.display();
   }
  // here the pig will disappear when it's speed is more than 3.
   else{
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility);
    image(this.image,this.body.position.x, this.body.position.y);
    pop();
   }
 }
};
