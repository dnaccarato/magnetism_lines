var formobject = {
  x: 200,
  y: 100,
  display: function() {
    stroke(255);
    strokeWeight(2);
    noFill();
    line(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}


var formobject2 = {
  x: 600,
  y: 400,
  display: function() {
    stroke(100);
    strokeWeight(.5);
    noFill();
    line(this.x, this.y, 20, 20);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}

var formobject3 = {
  x: 800,
  y: 920,
  display: function() {
    stroke(100);
    strokeWeight(.5);
    noFill();
    line(this.x, this.y, 40, 10);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}

var formobject4 = {
  x: 1000,
  y: 920,
  display: function() {
    stroke(100);
    strokeWeight(.5);
    noFill();
    line(this.x, this.y, 700, 610);
  },

  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}

function setup() {
  createCanvas(1200, 906);

}

function draw() {
background(220);
formobject.move();
formobject.display(); 
  
  
  formobject2.move();
formobject2.display(); 


  formobject3.move();
formobject3.display(); 



  formobject4.move();
formobject4.display(); 
}
