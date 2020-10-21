import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppServices } from '../app.service';
import { BluePrint } from './demotask1';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild('fnForm', {static:false}) fnForm:any;
      storingData=[{name:"Raju", age:27, gender:"Male", 'isAged':true},
                      {name:"plink", age:23, gender:"Male", 'isAged':true},
                      {name:"Queen", age:25, gender:"FeMale", 'isAged':false},
                      {name:"Rocky", age:29, gender:"Male", 'isAged':true}];
  
  price:any=""; 
  quantity:any= "";
  age:any="";
  res11:BluePrint[]=[];
disp:any=45;

  onSubmit(){
    let ft={price:this.price, quantity:this.quantity, age:this.age};
    this.res11.push(ft);
    this.fnForm.reset();
  }

    addItems(){
      let ft={price:this.price,quantity:this.quantity, age:this.age};
      this.res11.push(ft);
    }
    
  index:any="";

  edit(fm1:any, fm2:any, ind){
  this.index = ind;
  this.price = fm1;
  this.quantity= fm2;
}
updateItems(){
  for(var i=0; i< this.res11.length; i++){
    if( i == this.index){
      this.res11[i].price = this.price;
      this.res11[i].quantity = this.quantity;
    
    }
  }
}
delete(ind){
    this.res11.splice(ind, 1);
}

setClasses(){
  let pl={'isAged':true, 'age':this.storingData};
  return pl;
}
name:any="RajuKing";
upDateName(){
  this.name = "Raju and Queen";
}
btnEnable = true;
st=true;
serverName="";
 

public fileToUpload: File = null;
handleFileInput(files: FileList) {
  console.log( " files ", files)
    this.fileToUpload = files.item(0);
  }
  
  image:any="";
  upimg(){
    if(this.image !== "null"){
    this.image = 'assets/images/download (1).png';
    document.getElementById('pl').style.display = 'none'
  }
  else if(this.image == 'null'){
    document.getElementById('pl').style.display = 'block';
    this.image = '';
  }
  }
  
  

  constructor(private fb:FormBuilder,private appService : AppServices){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.st = false
    },3000)
  }


  
    
    
   


}
