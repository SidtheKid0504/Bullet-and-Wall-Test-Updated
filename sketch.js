var bullet,wall;
var speed,weight, thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(30, 52)
  weight = random(32, 40)
  thickness = random(22, 83);
  bullet =  createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2)

}

function draw() {
  background(0,0,0);  

  wall.shapeColor = (80,80,80)
  if(isCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed^2)/ thickness^3;
    if(damage > 10)
    {
      wall.shapeColor = "red";
    }
    if(damage <= 10)
    {
      wall.shapeColor = "green"
    }
  }
  drawSprites();
}

function isCollided(bullet_1, wall_1) {
  bulletRightEdge= bullet_1.x + bullet_1.width;
  wallLeftEdge = wall_1.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}