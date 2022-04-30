let pg=[];
var m= class movie {
    
    constructor(title,studio,rating=" ") {
        this.title=title;
        this.studio=studio;
        this.rating = rating;
    }
    getPG(grating) {
        this.rating=grating;
        pg.push(grating);
        return pg;
    }
}
let movieobj = new m("Avenger","20th centuery");
let cus=new m("Casino Royale","Eon Productions","PG­13");

console.log(movieobj);
console.log(movieobj.getPG("BW"));
console.log(cus);