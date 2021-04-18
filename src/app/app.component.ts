import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp';
  data
  constructor(private userService:UserService, private route:Router){
    this.userService.getPosts().subscribe((res:any)=>{
      this.data = res;
      console.log(this.data);
    });
  }
  result:any;
result1:any;
result2:any;
  res:any;


  addPost(){

    let data:any= {
      "userId":1,
      "id":101,
      "title":"Angular",
      "body":"et iusto sed quo iure\nvoluptatem"
    }
     this.res =this.getPost();
    this.userService.addPost(data).subscribe(res=>{
      debugger;
      this.result = res;
      console.log(this.result);
    });
  }
  getPost(){
    return "successfully";
  }
  getPostById(id:number){
    console.log(id);
    this.userService.getPostById(id).subscribe((res)=>{
      console.log(res);
    })
  }
  



}
