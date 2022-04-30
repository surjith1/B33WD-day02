class Uber {
	constructor(_baseRate=20, _areaFrom="Tambram",_startKiometer=0,_areaTo,_endKiometer) {
		//used to setup Object.'instance properties created inside constructor.
		console.log("Rectangle has been created");
		this.baseRate=_baseRate;
		this.areaFrom=_areaFrom;
		this.startKiometer=_startKiometer;
		this.areaTo=_areaTo;
		this.endKiometer=_endKiometer;
	}

	findAreaDifference () {
		console.log(`You are departed from ${this.areaFrom} and Ended at ${this.areaTo}`);
		let total= (this.startKiometer + this.endKiometer) * this.baseRate;
		console.log("Total Fare", total);
	}

}
let uberFare = new Uber(20,"Tambram",0,"Guindy",20);
uberFare.findAreaDifference();
