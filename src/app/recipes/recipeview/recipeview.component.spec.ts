import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeviewComponent } from './recipeview.component';

describe('RecipeviewComponent', () => {
  let component: RecipeviewComponent;
  let fixture: ComponentFixture<RecipeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
