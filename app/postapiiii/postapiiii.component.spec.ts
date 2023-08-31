import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostapiiiiComponent } from './postapiiii.component';

describe('PostapiiiiComponent', () => {
  let component: PostapiiiiComponent;
  let fixture: ComponentFixture<PostapiiiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostapiiiiComponent]
    });
    fixture = TestBed.createComponent(PostapiiiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
