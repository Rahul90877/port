import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Project2Component } from './project2/project2.component';
import { Home2Component } from './home2/home2.component';
import { CalComponent } from './cal/cal.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { GetapiiComponent } from './getapii/getapii.component';
import { PostapiiiiComponent } from './postapiiii/postapiiii.component';
import { ConComponent } from './con/con.component';




const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'pro',component:ProjectComponent},
  {path:'skill',component:SkillComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'pro2',component:Project2Component},
  {path:'',component:Home2Component},
  {path:'cal',component:CalComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'temp',component:TemplateformComponent},
  {path:'get',component:GetapiiComponent},
  {path:'post',component:PostapiiiiComponent},
  {path:'con',component:ConComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
