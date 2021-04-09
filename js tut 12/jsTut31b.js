console.log("this is js tut 31");

class Employee {
    constructor(givenName, givenExperience, division) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = division;
    }
    slogan() {
        return `I'm ${this.name} and this company is best`;
    }
    joiningYear() {
        return `${2020 - this.experience}`;
    }
    static add(a, b) {
        return a + b;
    }


}

harry = new Employee("Harry", 56, "Division");
// console.log(harry);
// console.log(Employee.add(10,5))

class Programmer extends Employee {
    constructor(givenName, givenExperience, division, language, github) {
        super(givenName, givenExperience, division);
        this.language = language;
        this.github = github;

    }
    favouriteLanguage(){
        if(this.language=="python"){
            return 'python';
        }
        else{
            return 'javascript';
        }
    }
    static multipy(a, b) {
        return a * b;
    }

}

rohan = new Programmer("rohan", 3, "kays", "go", "rohan430");
console.log(rohan)
console.log(rohan.favouriteLanguage());
console.log(Programmer.multipy(10,5));
console.log(rohan.joiningYear());