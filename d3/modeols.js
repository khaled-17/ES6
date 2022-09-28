


export class  Shape {
    constructor (ra){
        this.r=ra;
    }
}




 
export class  Rectangle extends Shape{
      
    constructor(r,y){
    super(r)
    this._y=y;

    } 
    toString(){ 
        console.log(this.r*this._y)
        console.log((this.r+this._y)*2)
    }



 
}


export class Square extends Shape{

    constructor(r){
        super(r)
     }    toString(){ 
        console.log(this.r*this.r)
      console.log((this.r)*4)
} 
}


export class Circle extends Shape{

constructor (r){
    super(r)
}
toString(){ 
     console.log(Math.PI * this.r * this.r)
     console.log(2*Math.PI*this.r)

}


}