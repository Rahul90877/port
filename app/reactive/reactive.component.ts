import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent {
  f:FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder, )
  {
    
    this.f = fb.group({
      firstName : ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      tittle:  [ '',Validators.required],
      check : [false,Validators.required],
      radio :[false,  Validators.required],
      radio2 :[ '', Validators.required],
      button:[ '', Validators.required]

    })

     

  }
  Save()
  {
    this.submitted = true;
    alert(this.f.controls['firstName'].value)
    this.f.controls['firstName'].setValue("")

  }
  onReset() {
    this.submitted = false;
    this.f.reset();
}
}
