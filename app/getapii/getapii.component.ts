import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-getapii',
  templateUrl: './getapii.component.html',
  styleUrls: ['./getapii.component.scss']
})
export class GetapiiComponent {
  cllist :any;


  constructor(private service : TestService)
{

}

  ngOnInit(): void {
    this.service.Getclientdetails().subscribe((data:any)=>
    {
    
            this.cllist = data.clientList;

    })
  }
}

