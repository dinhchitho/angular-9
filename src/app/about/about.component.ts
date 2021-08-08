import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = "Đinh Chí Thọ";
  public age;
  public vehicles=['Toyota','Honda','Yamaha'];

  constructor(private common:CommonService) {
    this.age =common.age;
   }

  ngOnInit(): void {
  }
  public tangtuoi(){
    this.common.age++;
    this.age = this.common.age;
    // if (this.age === 20) {
    //   this.name = "hihii";
    // }
    this.vehicles.push(this.name + ': ' + this.age);
  }

}
