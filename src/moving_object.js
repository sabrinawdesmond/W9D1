class MovingObject {
  constructor(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
  }

  draw(ctx) {
    let x = this.pos[0];
    let y = this.pos[1];
    let r = this.radius;
    let c = this.color;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = c;
    ctx.stroke();
  }

  move() {
    let newX = this.pos[0] + this.vel[0]
    let newY = this.pos[1] + this.vel[1]
    this.pos = [newX, newY]
  }
}

export default MovingObject;
