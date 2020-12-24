class Block {
  constructor(x, y,width,height){

    var options = {
      'friction' : 0.6,
      'restitution' : 0.4
    }




    this.visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);





  }

  score(){
    if(this.visibility<0 && this.visibility>-100){
      score = score + 10;
    }
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();

    }
    else{
     
      World.remove(world,this.body);
      score = score + 1;
      push();
      this.visiblity = this.visibility - 0.7;
      tint(255,this.visiblity);
      //rectMode(CENTER);
      //rect(this.body.position.x,this.body.position.y,30,50);
      //image(this.image,this.body.position.x,this.body.position.y,50,50);
    
      pop();
      
    }
  }

};