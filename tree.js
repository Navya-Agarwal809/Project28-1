class Tree{

    constructor(x, y, w, h){


        var options={

            isStatic:true, 
            restitution:0, 
            friction:1

        }
        this.x= x; 
        this.y= y; 
        this.w= w; 
        this.h= h;
        
        this.image= loadImage("tree.png"); 
        this.body= Bodies.circle(this.x, this.y, this.w, this.h, options); 
        World.add(world, this.body); 
    }
}