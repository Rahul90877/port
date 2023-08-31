import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../services/test.service';
@Component({
  selector: 'app-postapiiii',
  templateUrl: './postapiiii.component.html',
  styleUrls: ['./postapiiii.component.scss']
})
export class PostapiiiiComponent {


  f:FormGroup;
  submitted : boolean = false;
  constructor(private fb :FormBuilder,private service :TestService)
  
  {this.f=this.fb.group({
  clientName:['',Validators.required],
  phone :['',Validators.required],
  address :['',Validators.required],
  gst :['',Validators.required],
  website :['',Validators.required],
  email :['',Validators.required],
  contactPerson :['',Validators.required],
  phoneNumber :['',Validators.required],
  
  
  
  })
  }
  
  Submit()
  {
    
  this.submitted = true;
  
  let input ={
    clientId :0, 
    clientName :this.f.controls["clientName"].value,
    phone :this.f.controls["phone"].value, 
    address :this.f.controls["address"].value,
    gst :this.f.controls["gst"].value,
    website :this.f.controls["website"].value,
    email :this.f.controls["email"].value,
    contactPerson :this.f.controls["contactPerson"].value,
    phoneNumber :this.f.controls["phoneNumber"].value,
    
    createdBy: 1 }
  
  
  
  this.service.Addnewclient(input).subscribe((data:any)=>{
    alert(JSON.stringify(data))
  })
  
  }
  
  }