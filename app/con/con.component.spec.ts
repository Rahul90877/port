import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConComponent } from './con.component';

describe('ConComponent', () => {
  let component: ConComponent;
  let fixture: ComponentFixture<ConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConComponent]
    });
    fixture = TestBed.createComponent(ConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
