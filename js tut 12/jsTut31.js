console.log("this is tut 31");
class employee{
    constructor(givenName,givenExperience,givenDivision){

        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenExperience;


    }
    slogan(){
        return `I am ${this.name} this company is best`;
    }
    joinningYear(){
        return 2020-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}

let harry=new employee("Harry",56,"Division");
console.log(harry);
console.log(harry.joinningYear());
console.log(employee.add(35,4));
    

class progammer extends employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision);
        this.language=language;
        this.github=github;
    }
favoriteLanguage(){
    if(this.language=="python"){
        return "python";
    }
    else{
        return "JavaScript";
    }
};
static multiply(a,b){
    return a*b;
}


}

let rohan=new progammer("Rohan",3 ,"Lays","Go","Rohan420");
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(progammer.multiply(5,7));