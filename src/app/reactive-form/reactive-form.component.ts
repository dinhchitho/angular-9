import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  //public name = new FormControl('');
  profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  public updateName() {
    //this.name.setValue('Dinh Chi Tho');
  }
  public onSubmit(){
   console.log(this.profileForm);
   console.log(this.profileForm.controls.name.value);
   console.log(this.profileForm.controls.age.value);
  }
}
