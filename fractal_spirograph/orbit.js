class orbit {
  constructor(_x, _y, _r, _n, _parrent = null) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.parrent = _parrent;
    this.child = null;
    this.angle = -PI/2;
    this.n = _n;
    this.speed = radians(pow(k, this.n-1))/quality;
  }
  addChild() {
    var newr = this.r*decV;
    var newx = this.x + this.r + type*newr;
    var newy = this.y;
    this.child = new orbit(newx, newy, newr, this.n+1, this);
    return this.child;
  }
  update() {
    this.angle+=this.speed;
    var rsum = type*this.r + this.parrent.r;
    this.x = this.parrent.x + rsum * cos(this.angle);
    this.y = this.parrent.y + rsum * sin(this.angle);
    if (this.child != null) {
      this.child.update();
    }else {
      points.push(createVector(this.x, this.y));
    }
  }
  display() {
    if (this.child != null) {
      this.child.display();
    }
    stroke(255, 100);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }
}
