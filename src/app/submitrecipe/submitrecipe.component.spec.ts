import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitrecipeComponent } from './submitrecipe.component';

describe('SubmitrecipeComponent', () => {
  let component: SubmitrecipeComponent;
  let fixture: ComponentFixture<SubmitrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
