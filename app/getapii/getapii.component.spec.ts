import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapiiComponent } from './getapii.component';

describe('GetapiiComponent', () => {
  let component: GetapiiComponent;
  let fixture: ComponentFixture<GetapiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetapiiComponent]
    });
    fixture = TestBed.createComponent(GetapiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
