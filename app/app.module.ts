import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { Project2Component } from './project2/project2.component';
import { Home2Component } from './home2/home2.component';
import { CalComponent } from './cal/cal.component';
import { TemplateformComponent } from './templateform/templateform.component';

import { PostapiiiiComponent } from './postapiiii/postapiiii.component';
import { GetapiiComponent } from './getapii/getapii.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ConComponent } from './con/con.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    Project2Component,
    Home2Component,
    CalComponent,
    TemplateformComponent,

    PostapiiiiComponent,
    GetapiiComponent,
    ReactiveComponent,
    ConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
