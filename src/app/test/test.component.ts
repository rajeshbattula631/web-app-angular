import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  isShown:boolean = false;
  test:string = "Testing";
  isNumber:number = 1;
  isDouble:number = 1.00;
  isFloat:number = 1.027;
  student:any = "test1";
  users:any[] = [];
  studentList:any[] = [{"name":"rajesh","id":1},{"name":"Hiren","id":2}];
  data:string= '';
  constructor() {
    
   }

  ngOnInit() {
  }

  onStateChanged(shown:boolean){
    debugger;
    if(shown){
      this.isShown = false;
      
    }else{
      this.isShown = true;
     
    }
    
  }
  onClicked(data,sample:string){
    this.isShown = true;
    this.data = sample;
    console.log(data);
  }
}
