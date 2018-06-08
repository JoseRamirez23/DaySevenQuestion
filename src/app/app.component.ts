import {Sedan} from './vehicle/vehicle.module';
import { Component, OnInit } from '@angular/core';

class User{

  constructor(public id:number,public name:string){}
}



class CarBrand{

  constructor(protected make:string){


  }
}

//this derives from
class Car extends CarBrand{

  constructor( make:string, public model:string, public year:number){

    super(make);
  }
  //method
  getDetails(){

    return(
      this.make =`${this.make}`, 
      this.model = `${this.model}`,
      this.year = this.year
    );
  }
}

interface Fighter{

  name:string;
  score:number;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
  h1{
    margin:auto;
    color:gray;
  }
  
  `]
})
export class AppComponent implements OnInit{
  title = 'app';

  displayParagraph:boolean = true;

  

  //this is undefined 
  unknown : undefined;
  person : string = 'john';
  //num which is a number
  num :number = 7;
  //a string by the name of person
  //true or false is a boolean
  stop :boolean = false;
  //any can be boolean,string, or string
  people: any;
  //array
  colors:['blue','red','green'];

  //class
  ford: CarBrand = new CarBrand('Ford');
  honda: Car = new Car('Honda','Accord',2009);


  //interface
  fighter1: Fighter = {name:"Jet",score:1000};
  fighter2: Fighter = {name:"Jackie", score:1001};


  //modules
  hondas : Sedan = new Sedan('Honda', 'Civic',2000);
  fords : Sedan = new Sedan ('Ford',"Mustang", 2013);
  
  
  users =[
    new User(1,'Joe'),
    new User(2,'Rick'),
    new User(3,'Mark'),
    new User(4,'Henry')
  ];
  
  
  ngOnInit(){

    //classes
    console.log(this.ford);
    console.log(this.honda);

    //interface
    console.log(this.fighter1.name + ' lost to', this.fighter2.name);
    
    //module
    console.log(this.hondas.make + ' lost in a race with ' + this.fords.make);

  }
}

