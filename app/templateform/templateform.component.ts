import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent {
  firstName1:string = ""
  secondName2:string =""
  thirdname3:string =""
  fourth4:string =""
  eigth8:string =""
  fifth5:string =""
  sixth6:string =""
  seven7:string =""

save()
{
  alert(this.firstName1)
 
}
}
