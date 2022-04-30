
class person {
    constructor(fname,lname, age,dob,address,height,weight,hobby) {
        this.fname=fname;
        this.lname =lname;
        this.age=age;
        this.dob=dob;
        this.address =address;
        this.height = height;
        this.weight=weight;
        this.hobby = hobby;
    }
  occupationDetails(occType,occStatus,empName,designation) {
      this.occType = occType;
      this.occStatus = occStatus;
      this.empName = empName;
      this.designation = designation;
      console.log(`Occupation Type: ${this.occType}, Occupation Status: ${this.occStatus}, Employeer Name: ${this.empName}, Designation: ${this.designation}`);
  }

    displayPerson(){
        console.log(`First Name is ${this.fname} , Last Name is ${this.lname}, Age is ${this.age}, Date Of Birth is: ${this.dob}, Address is ${this.address}, Height is ${this.height}, Weight is ${this.weight}, Hobby is ${this.hobby}.`);
    }
  
}
class contactInformation extends person {
    constructor(fname,lname,country,state,phone,email) {
        super(fname,lname);
        this.country = country;
        this.state = state;
        this.phone = phone;
        this.email = email;
      
    }
    displayContactInfo() {
        console.log(`First Name: ${this.fname}, Last Name: ${this.lname}, Country: ${this.country} state: ${this.state}, Phone: ${this.phone}, EMail: ${this.email}`);
    }
}
class personQualification extends person {
    constructor(fname,lname, age,dob,address,height,weight,hobby, degree) {
        super(fname,lname, age,dob,address,height,weight,hobby);
        this.degree = degree;
    }
displayQualification() {
    console.log(`${this.fname}  ${this.lname} is ${this.degree} degree Graduate with distinction.`)
}
}

let personDetails = new person("Surjith", "Vijayakumar", 28, "31/05/1994", "2-13 Vazhathottam Paiilyadi K.K.District.", 165, 75, "Playing cricket");
personDetails.displayPerson();
personDetails.occupationDetails("Salaried", "Full-Time","LT083", "UI / UX Designer");


let surjith = new personQualification("Surjith", "Vijayakumar", 28, "31/05/1994", "2-13 Vazhathottam Paiilyadi K.K.District.", 165, 75, "Playing cricket", "B.TECH-Information Technology");
surjith.displayQualification();

let contact = new contactInformation("Surjith", "Vijayakumar", "India","TamilNadu",9629799186,"rvdsurjith@gmail.com");
contact.displayContactInfo();

