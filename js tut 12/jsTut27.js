console.log("This is tutorial 27")
let obj={
    name:"Harry",
    work:"programmer"
}
console.log(obj);
console.log(obj.name);

let car={
    name:"Maruti 800",
    topSpeed:120,
    run:function(){
        return "Car is running";
    }
}
console.log(car);
console.log(car.run());

//constructor= to create object

function generalCar(givenName,givenSpeed){
    this.name=givenName;
    this.speed=givenSpeed;
    this.run=function(){
        return `${this.name} is running`;
    };
    this.analyze=function(){
        return `this car is slower by ${200-this.speed} KM/H than Marcedes`
    }
}
let car1=new generalCar("Nissan",180)
// console.log(car1);
//console.log(car1.speed);

let car2=new generalCar("Toyota Corolla",100);
//console.log(car2);
//console.log(car2.name);
//console.log(car2.analyze());

let car3=new generalCar("Marcedes",200);
//console.log(car3);
//console.log(car3.analyze());
console.log(car1,car2,car3);
