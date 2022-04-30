
class Circle {
constructor(radius=1.0,color="red") {
    this.radius =radius;
    this.color= color;
}
getRadius() {
    //this.radius=radius;
  console.log(this.radius);
}
setRadius(sradius) {
    this.radius = sradius;
    console.log(sradius);
}
getColor(gColor) {
    this.color=gColor;
}
setColor(sColor) {
    this.color=sColor;
}
getArea(pi=3.14) {
    this.pi=3.14;
    //this.radius=radius;
    let s= pi *this.radius *this.radius;
    console.log("Area of Circle:"+s);
}
getCircumference() {
    //this.pi=3.14;
    //this.radius = radius;
    this.calculareCircumbference();
}

calculareCircumbference(pi=3.14){
    let res=2*pi*this.radius;
    console.log("Cirumference of Circle is"+res)
}
}
let ci=new Circle(5.0,"red");
ci.getRadius();
ci.setRadius(10);
ci.getArea();
ci.getCircumference();