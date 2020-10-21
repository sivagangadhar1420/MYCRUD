import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.css']
})
export class AddOptionsComponent implements OnInit {

  constructor() { }
  optionValue:any="";
  res11:any=[];

  ngOnInit() {
  }

  
  addItems(){
    let ft={option:this.optionValue};
    this.res11.push(ft);
    
  }
 

}
