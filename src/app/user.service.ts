import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
    
  }

  getPosts(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res=>res));
  }

  addPost(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data)).pipe(map(res=>res));
  }
  getPostById(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).pipe(map(res=>res));
  }
}
