class Ground
{
    constructor(x,y,w,h)
    {
        let options = 
        {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        World.add(world,this.body)
    }

    show()
    {

        push()
        var pos = this.body.position 
        fill("yellow")
        
        rectMode(CENTER)
        
        
        rect(pos.x, pos.y, this.w, this.h)
        pop()
    }
      display(){
        
      }
}