import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = '';
  public age = '';
  public comments: any;
  public posts: any;
  public vehicles=['Toyota','Honda','Yamaha'];

  constructor(private common:CommonService,private serverHttp:ServerHttpService) {
   // this.age =common.age;
   }

  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data)=>{
      console.log(data);
      this.name = data.name;
      this.age =data.age;
    });
    this.serverHttp.getComments().subscribe((data)=>{
      console.log(data);
      this.comments = data;
    });
    this.serverHttp.getPosts().subscribe((data)=>{
      console.log(data);
      this.posts = data;
    });
  }
  public addPost(){
    const newData={title:'testing',author:'author testing'};
    this.serverHttp.addPost(newData).subscribe((data)=>{
      console.log(data);
      this.posts.push(data);
    });
  }
  public tangtuoi(){
    //this.common.age++;
    //this.age = this.common.age;
    // if (this.age === 20) {
    //   this.name = "hihii";
    // }
    //this.vehicles.push(this.name + ': ' + this.age);
  }

}
