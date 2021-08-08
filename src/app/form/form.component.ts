import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public name='';
  public password='';
  public vehicles=['Toyota','Honda','Yamaha'];
  public selectedVehicle='';

  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(){
    console.log('OnSubmit');
    console.log('name: ' + this.name);
    console.log('password: ' + this.password);
    console.log('selectedVehicle: ' + this.selectedVehicle);
  }
  public selectVehicle(event: any) {
    this.selectedVehicle=event.target.value;
  }
}
